window.xhr = (reqContent, url, options = {}, callback) => {
    return new Promise((resolve, reject) => {
        if (typeof options == "function") callback = options;
        if (typeof options == "function") options = {};
        if (options.type == undefined)        options.type = "POST";
        if (options.contentType == undefined) options.contentType = "json";
        var xhr = new XMLHttpRequest();
        xhr.open(options.type, url, true);
        if (options.type == "GET") {
            xhr.send();
        } else if (options.contentType == "form") {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("data="+JSON.stringify(reqContent));
        } else if (options.contentType == "json") {
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(reqContent));
        } else if (options.contentType == "none") {
            xhr.send(reqContent);
            // for file uploads (multipart/form-data)
        } else if (options.contentType) {
            xhr.setRequestHeader("Content-type", options.contentType);
            xhr.send(reqContent);
        }
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                let res = JSON.parse(this.responseText);
                let err = null;
                if (!String(this.status).startsWith("2")) {
                    console.error("HTTP error "+this.status);
                    err = this.status;
                }
                if (err) reject(err);
                else resolve(res);
                if (callback) callback(res, err);
            }
        };
        // resolve(5);
    });
}

$(document).ready(() => {



    // YouTube API
    function start() {
    	gapi.client.init({
    		"apiKey": "AIzaSyBnQnpboWUfWyR8aW6HuQV5MAlxZ5FQ090",
    		"discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
    	}).then(function() {

    		// SYNCTAN
    		// API request details
    		var requestSynctan = gapi.client.youtube.playlistItems.list({
    			part: "snippet",
    			playlistId: "UUoMimPRPeR28TM3_0cinjVQ",
    			maxResults: 6
    		});
    		// Perform API request, process response
    		requestSynctan.execute(function(response) {
                var items = response.result.items;
                for (var i = 0; i < items.length; i++) {
                    var url = items[i].snippet.resourceId.videoId;
                    var img = items[i].snippet.thumbnails.high.url;
                    var title = items[i].snippet.title;
                    var item = $("section.synctan .thumbnails a.item:nth-child("+(i+1)+")");
                    item.attr("href", "https://www.youtube.com/watch?v="+url);
                    item.find("img").attr("src", img);
                }
                $("section.synctan").removeClass("hidden");
    		});

    		// VIDEO (personal)
    		// API request details
    		var requestVideo = gapi.client.youtube.playlistItems.list({
    			part: "snippet",
    			playlistId: "UUy6jcAF6fZGttRvihyQixbA",
    			maxResults: 6
    		});
    		var requestCommissions = gapi.client.youtube.playlistItems.list({
    			part: "snippet",
    			playlistId: "PL84-DNDSU8p5WP6jA7hvOCV9dIKBNjdCS",
    			maxResults: 6
    		});
    		// Perform API request, process response
            var videoResponse, commissionResponse;
    		requestVideo.execute(function(response) {
                videoResponse = response;
                processResponses();
    		});
            requestCommissions.execute(function(response) {
                commissionResponse = response;
                processResponses();
    		});
            function processResponses() {
                if (videoResponse && commissionResponse) {
                    // combine video and commission responses
                    items = videoResponse.result.items.concat(commissionResponse.result.items);
                    items.sort(function(a, b) {
                        var dateA = new Date(a.snippet.publishedAt);
                        var dateB = new Date(b.snippet.publishedAt);
                        return dateB - dateA; // sort by date ascending
                    });
                    items = items.splice(0, 6);
                    for (var i = 0; i < items.length; i++) {
                        var url = items[i].snippet.resourceId.videoId;
                        var img = items[i].snippet.thumbnails.high.url;
                        var title = items[i].snippet.title;
                        var item = $("section.video .thumbnails a.item:nth-child("+(i+1)+")");
                        item.attr("href", "https://www.youtube.com/watch?v="+url);
                        item.find("img").attr("src", img);
                    }
                    $("section.video").removeClass("hidden");
                }
            }

    	});
    }
    gapi.load("client", start);

    // SoundCloud API
    var clientID = "6ibYZTmF5qnpvp88S9V3werVrC18WCdC";
    var url = "http://api.soundcloud.com/users/247370320/tracks?limit=6&client_id="+clientID;
    xhr(null, url, {type: "GET"}).then((tracks) => {
        for (var i = 0; i < tracks.length; i++) {
            var url = tracks[i].permalink_url;
            var img = tracks[i].artwork_url.replace("large", "t300x300");
            var item = $("section.lacuna .thumbnails a.item:nth-child("+(i+1)+")");
            item.attr("href", url);
            item.find("img").attr("src", img);
        }
        $("section.lacuna").removeClass("hidden");
    }, (err) => {
        throw Error("Could not fetch SoundCloud tracks");
        console.log(err);
    });

    // discord/email popups
    $(document).on("click", function(e) {

        if ($(e.target).hasClass("has-popup") || $(e.target).hasClass("popup")) {
            if ($(e.target).find("input").hasClass("hidden")) {
                // hidden
                $("a.has-popup input").addClass("hidden");
                $(e.target).find("input").select().removeClass("hidden");
            } else {
                // not hidden
                $(e.target).find("input").addClass("hidden");
            }
        } else {
            // clicked anywhere
            $("a.has-popup input").addClass("hidden");
        }

    });

});

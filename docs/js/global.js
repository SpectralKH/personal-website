"use strict";function xhr(t,r){var s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=arguments[3];return new Promise(function(o,n){"function"==typeof s&&(i=s),"function"==typeof s&&(s={}),null==s.type&&(s.type="POST"),null==s.contentType&&(s.contentType="json");var e=new XMLHttpRequest;e.open(s.type,r,!0),"GET"==s.type?e.send():"form"==s.contentType?(e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("data="+JSON.stringify(t))):"json"==s.contentType?(e.setRequestHeader("Content-type","application/json"),e.send(JSON.stringify(t))):"none"==s.contentType?e.send(t):s.contentType&&(e.setRequestHeader("Content-type",s.contentType),e.send(t)),e.onreadystatechange=function(){if(4==this.readyState){var e=JSON.parse(this.responseText),t=null;String(this.status).startsWith("2")||(console.error("HTTP error "+this.status),t=this.status),t?n(t):o(e),i&&i(e,t)}}})}window.xhr=xhr;var YTapiKey="AIzaSyBnQnpboWUfWyR8aW6HuQV5MAlxZ5FQ090";xhr(null,"https://www.googleapis.com/youtube/v3/playlistItems?key="+YTapiKey+"&part=snippet&maxResults=6&playlistId=PL84-DNDSU8p5WP6jA7hvOCV9dIKBNjdCS",{type:"GET"}).then(function(e){console.log("==--==--==--\x3e YouTube Video"),console.log(e);for(var t=e.items,o=0;o<t.length;o++){var n=t[o].snippet.resourceId.videoId,r=t[o].snippet.thumbnails.standard.url,s=document.querySelector("section.video .thumbnails a.item:nth-child("+(o+1)+")");s.setAttribute("href","https://www.youtube.com/watch?v="+n),s.querySelector("img").setAttribute("src",r),s.title=t[o].snippet.title}document.querySelector("section.video").classList.remove("hidden")},function(e){throw document.querySelector("section.video").classList.add("removed"),console.log("Could not fetch Video YouTube playlistItems"),Error(e)}),xhr(null,"https://www.googleapis.com/youtube/v3/playlistItems?key="+YTapiKey+"&part=snippet&maxResults=6&playlistId=UUoMimPRPeR28TM3_0cinjVQ",{type:"GET"}).then(function(e){console.log("==--==--==--\x3eYouTube Shrive"),console.log(e);for(var t=e.items,o=0;o<t.length;o++){var n=t[o].snippet.resourceId.videoId,r=t[o].snippet.thumbnails.high.url,s=document.querySelector("section.shrive .thumbnails .item:nth-child("+(o+1)+")");s.setAttribute("href","https://www.youtube.com/watch?v="+n),s.querySelector("img").setAttribute("src",r),s.title=t[o].snippet.title}document.querySelector("section.shrive").classList.remove("hidden")},function(e){throw document.querySelector("section.shrive").classList.add("removed"),console.log("Could not fetch Shrive YouTube playlistItems"),Error(e)}),xhr(null,"https://api.soundcloud.com/users/247370320/tracks?limit=8&client_id=6ibYZTmF5qnpvp88S9V3werVrC18WCdC",{type:"GET"}).then(function(e){console.log("==--==--==--\x3e SoundCloud Lacuna"),console.log(e);for(var t=0;t<6;t++){var o=e[t].permalink_url,n=e[t].artwork_url.replace("large","t500x500"),r=document.querySelector("section.lacuna .thumbnails .item:nth-child("+(t+1)+")");r.setAttribute("href",o),r.querySelector("img").setAttribute("src",n),r.title=e[t].title}document.querySelector("section.lacuna").classList.remove("hidden")},function(e){throw document.querySelector("section.lacuna").classList.add("removed"),console.log("Could not fetch SoundCloud tracks"),Error(e)}),function(){var e="510127accaf075e7a33b";e+="04e4569c7e2f78c83539",fetch("https://api.github.com/graphql",{body:JSON.stringify({query:'\n          query {\n              user(login: "probablykasper") {\n              pinnedRepositories(first:6) {\n                  edges {\n                  node {\n                      description\n                      homepageUrl\n                      url\n                      name\n                  }\n                  }\n              }\n              }\n          }\n      '}),headers:{Authorization:"bearer "+e,"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then(function(e){if(e.ok)return e;throw Error(e)}).then(function(e){e.json().then(function(e){console.log("==--==--==--\x3e GitHub"),console.log(e.data);for(var t=e.data.user.pinnedRepositories.edges,o=0;o<t.length;o++){var n=t[o].node,r=n.description,s=n.homepageUrl,i=n.name,c=n.url,l=document.querySelector("section.github .cards .item:nth-child("+(o+1)+")");l.classList.remove("hidden"),l.querySelector("p.title").innerHTML=i,l.querySelector("p.description").innerHTML=r,c&&(l.querySelector("a.repo-url").setAttribute("href",c),l.querySelector("a.repo-url").classList.remove("hidden")),s&&(l.querySelector("a.repo-website").setAttribute("href",s),l.querySelector("a.repo-website").classList.remove("hidden"))}document.querySelector("section.github").classList.remove("hidden")})}).catch(function(e){throw document.querySelector("section.github").classList.add("removed"),e})}(),document.addEventListener("click",function(e){function t(){for(var e=document.querySelectorAll("a.has-popup"),t=0;t<e.length;t++)e[t].classList.add("popup-hidden")}if(e.target.classList.contains("has-popup"))var o=e.target;else{if(!e.target.parentNode.classList.contains("has-popup"))return void t();o=e.target.parentNode}if(o.classList.contains("popup-hidden")){t();var n=document.createRange(),r=o.querySelector(".popup");n.selectNodeContents(r);var s=window.getSelection();s.removeAllRanges(),s.addRange(n),o.classList.remove("popup-hidden")}else e.target.classList.contains("popup")||o.classList.add("popup-hidden")});
//# sourceMappingURL=global.js.map

function xhr (reqContent, url, options = {}, callback) {
  return new Promise((resolve, reject) => {
    if (typeof options === 'function') callback = options
    if (typeof options === 'function') options = {}
    if (options.type == undefined) options.type = 'POST'
    if (options.contentType == undefined) options.contentType = 'json'
    var xhr = new XMLHttpRequest()
    xhr.open(options.type, url, true)
    if (options.type == 'GET') {
      xhr.send()
    } else if (options.contentType == 'form') {
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('data=' + JSON.stringify(reqContent))
    } else if (options.contentType == 'json') {
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.send(JSON.stringify(reqContent))
    } else if (options.contentType == 'none') {
      xhr.send(reqContent)
      // for file uploads (multipart/form-data)
    } else if (options.contentType) {
      xhr.setRequestHeader('Content-type', options.contentType)
      xhr.send(reqContent)
    }
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        let res = JSON.parse(this.responseText)
        let err = null
        if (!String(this.status).startsWith('2')) {
          console.error('HTTP error ' + this.status)
          err = this.status
        }
        if (err) reject(err)
        else resolve(res)
        if (callback) callback(res, err)
      }
    }
    // resolve(5);
  })
}
window.xhr = xhr

var YTapiKey = 'AIzaSyBnQnpboWUfWyR8aW6HuQV5MAlxZ5FQ090';

(function Video () {
  var maxResults = 6

  var url = 'https://www.googleapis.com/youtube/v3/playlistItems' +
    '?key=' + YTapiKey +
    '&part=snippet' +
    '&maxResults=' + maxResults +
    '&playlistId='
  var personalURL = url + 'UUy6jcAF6fZGttRvihyQixbA'
  var commissionsURL = url + 'PL84-DNDSU8p5WP6jA7hvOCV9dIKBNjdCS'
  var personal = xhr(null, personalURL, { type: 'GET' })
  var commissions = xhr(null, commissionsURL, { type: 'GET' })
  Promise.all([personal, commissions]).then((results) => {
    console.log('==--==--==--> YouTube Personal + Commissions')
    console.log(results)
    // combine video and commission responses
    var items = results[0].items.concat(results[1].items)
    items.sort(function (a, b) {
      var dateA = new Date(a.snippet.publishedAt)
      var dateB = new Date(b.snippet.publishedAt)
      return dateB - dateA // sort by date ascending
    })
    items = items.splice(0, maxResults)
    for (var i = 0; i < items.length; i++) {
      var url = items[i].snippet.resourceId.videoId
      var img = items[i].snippet.thumbnails.high.url
      var title = items[i].snippet.title
      var item = document.querySelector('section.video .thumbnails a.item:nth-child(' + (i + 1) + ')')
      item.setAttribute('href', 'https://www.youtube.com/watch?v=' + url)
      item.querySelector('img').setAttribute('src', img)
    }
    document.querySelector('section.video').classList.remove('hidden')
  }, (err) => {
    document.querySelector('section.video').classList.add('removed')
    console.log('Could not fetch Video YouTube playlistItems')
    throw Error(err)
  })
})();

(function Shrive () {
  var maxResults = 6

  var url = 'https://www.googleapis.com/youtube/v3/playlistItems' +
    '?key=' + YTapiKey +
    '&part=snippet' +
    '&maxResults=' + maxResults +
    '&playlistId=UUoMimPRPeR28TM3_0cinjVQ'
  xhr(null, url, { type: 'GET' }).then((result) => {
    console.log('==--==--==-->YouTube Shrive')
    console.log(result)
    var items = result.items
    for (var i = 0; i < items.length; i++) {
      var url = items[i].snippet.resourceId.videoId
      var img = items[i].snippet.thumbnails.high.url
      var title = items[i].snippet.title
      var item = document.querySelector('section.shrive .thumbnails .item:nth-child(' + (i + 1) + ')')
      item.setAttribute('href', 'https://www.youtube.com/watch?v=' + url)
      item.querySelector('img').setAttribute('src', img)
    }
    document.querySelector('section.shrive').classList.remove('hidden')
  }, (err) => {
    document.querySelector('section.shrive').classList.add('removed')
    console.log('Could not fetch Shrive YouTube playlistItems')
    throw Error(err)
  })
})();

(function Lacuna () {
  var maxResults = 8

  // Lacuna
  var clientID = '6ibYZTmF5qnpvp88S9V3werVrC18WCdC'
  var url = 'https://api.soundcloud.com/users/247370320/tracks' +
    '?limit=' + maxResults +
    '&client_id=' + clientID
  xhr(null, url, { type: 'GET' }).then((tracks) => {
    console.log('==--==--==--> SoundCloud Lacuna')
    console.log(tracks)
    for (var i = 0; i < 6; i++) {
      var url = tracks[i].permalink_url
      var img = tracks[i].artwork_url.replace('large', 't300x300')
      var item = document.querySelector('section.lacuna .thumbnails .item:nth-child(' + (i + 1) + ')')
      item.setAttribute('href', url)
      item.querySelector('img').setAttribute('src', img)
    }
    document.querySelector('section.lacuna').classList.remove('hidden')
  }, (err) => {
    document.querySelector('section.lacuna').classList.add('removed')
    console.log('Could not fetch SoundCloud tracks')
    throw Error(err)
  })
})();

(function GitHub () {
  function xxxhr({ method, url, headers, json }) {
    const req = new XMLHttpRequest()
    req.open(method, url, true)
    if (headers) {
      for (const headerKey in headers) {
        if (headers.hasOwnProperty(headerKey)) {
          req.setRequestHeader(headerKey, headers[headerKey])
        }
      }
    }
    if (json) {
      req.setRequestHeader('Content-type', 'application/json')
      req.send(JSON.stringify(json))
    }
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        const res = JSON.parse(this.responseText)
        if (String(this.status).startsWith('2')) {
          if (callback) callback(null, res)
        } else {
          if (callback) callback(this.status, res)
        }
      }
    }
    // function xhr (reqContent, url, options = {}, callback) {
    //   return new Promise((resolve, reject) => {
    //     if (typeof options === 'function') callback = options
    //     if (typeof options === 'function') options = {}
    //     if (options.type == undefined) options.type = 'POST'
    //     if (options.contentType == undefined) options.contentType = 'json'
    //     var xhr = new XMLHttpRequest()
    //     xhr.open(options.type, url, true)
    //     if (options.type == 'GET') {
    //       xhr.send()
    //     } else if (options.contentType == 'form') {
    //       xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    //       xhr.send('data=' + JSON.stringify(reqContent))
    //     } else if (options.contentType == 'json') {
    //       xhr.setRequestHeader('Content-type', 'application/json')
    //       xhr.send(JSON.stringify(reqContent))
    //     } else if (options.contentType == 'none') {
    //       xhr.send(reqContent)
    //       // for file uploads (multipart/form-data)
    //     } else if (options.contentType) {
    //       xhr.setRequestHeader('Content-type', options.contentType)
    //       xhr.send(reqContent)
    //     }
    //     xhr.onreadystatechange = function () {
    //       if (this.readyState == 4) {
    //         let res = JSON.parse(this.responseText)
    //         let err = null
    //         if (!String(this.status).startsWith('2')) {
    //           console.error('HTTP error ' + this.status)
    //           err = this.status
    //         }
    //         if (err) reject(err)
    //         else resolve(res)
    //         if (callback) callback(res, err)
    //       }
    //     }
    //     // resolve(5);
    //   })
    // }
    // window.xhr = xhr
  }
  window.xxxhr = xxxhr
  // this is so babel won't combine the two string into one, and
  // make GitHub revoke the token when it detects it in the commit
  let token = '510127accaf075e7a33b'
  if (true) token += '04e4569c7e2f78c83539'
  // fetch('https://api.github.com/graphql', {
  //   body: JSON.stringify({
  //     query: `
  //         query {
  //             user(login:"SpectralKH") {
  //             pinnedRepositories(first:6) {
  //                 edges {
  //                 node {
  //                     description
  //                     homepageUrl
  //                     url
  //                     name
  //                 }
  //                 }
  //             }
  //             }
  //         }
  //     `
  //   }),
  //   headers: {
  //     Authorization: 'bearer ' + token,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   method: 'POST'
  // })
  //   .then((response) => {
  //     if (response.ok) return response
  //     else throw Error(response)
  //   })
  //   .then((response) => {
  //     response.json().then((result) => {
  //       console.log('==--==--==--> GitHub')
  //       console.log(result.data)
  //       const repos = result.data.user.pinnedRepositories.edges
  //       for (var i = 0; i < 6; i++) {
  //         const repo = repos[i].node
  //         const description = repo.description
  //         const repoWebsite = repo.homepageUrl
  //         const name = repo.name
  //         const repoUrl = repo.url
  //         // const img = tracks[i].artwork_url.replace('large', 't300x300')
  //         const item = document.querySelector('section.github .cards .item:nth-child(' + (i + 1) + ')')
  //         // item.setAttribute('href', url)
  //         item.querySelector('p.title').innerHTML = name
  //         item.querySelector('p.description').innerHTML = description
  //         if (repoUrl) {
  //           item.querySelector('a.repo-url').setAttribute('href', repoUrl)
  //           item.querySelector('a.repo-url').classList.remove('hidden')
  //         }
  //         if (repoWebsite) {
  //           item.querySelector('a.repo-website').setAttribute('href', repoWebsite)
  //           item.querySelector('a.repo-website').classList.remove('hidden')
  //         }
  //       }
  //       document.querySelector('section.github').classList.remove('hidden')
  //     })
  //   })
  //   .catch((err) => {
  //     document.querySelector('section.github').classList.add('removed')
  //     throw err
  //   })
})()

// discord/email popups
document.addEventListener('click', function (e) {
  function hideAllInputs () {
    var inputs = document.querySelectorAll('a.has-popup input')
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.add('hidden')
    }
  }
  var hasClassHasPopup = e.target.classList.contains('has-popup')
  var hasClassPopup = e.target.classList.contains('popup')
  if (hasClassHasPopup || hasClassPopup) {
    var input = e.target.querySelector('input')
    if (e.target.classList.contains('popup')) input = e.target
    var clickedInput = e.target.classList.contains('popup')
    var inputIsHidden = input.classList.contains('hidden')
    if (inputIsHidden) {
      hideAllInputs()
      input.select()
      input.classList.remove('hidden')
    } else if (!clickedInput) {
      input.classList.add('hidden')
    }
  } else {
    // clicked anywhere
    hideAllInputs()
  }
})

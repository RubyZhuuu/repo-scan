//define all of the apis, based on Github api
import fetch from 'isomorphic-fetch'
import { PAGE_SIZE } from '../utils/constant'
const domain = "https://api.github.com"

var api = {
    search: function(q, page, sort) {
        let url = `${domain}/search/repositories?q=${q}&per_page=${PAGE_SIZE}`
        url += page ? '&page=' + page : ''

        //逻辑不太好，catch之后还有then
        return myFetch(url)
            .then(data => {
                if(typeof data !== 'undefined')
                    return data.json()
            })
    },
    getReadmeRaw: function(name, owner) {
        let url = `${domain}/repos/${owner}/${name}/readme`

        return myFetch(url)
            .then(data => data.json())
            .then(data => {
                return myFetch(data.download_url)
                .then(response => response.text())
            })
    }
}

const myFetch = function(url) {
    return fetch(url, { headers: { "Accept": "application/vnd.github.v3+json" }})
        .then(response => {
            if(response.status >= 400 || response.status === 0) {
                _handleError(response, (error, message) => {
                    alert(`Error: ${error}.${message}`)
                })

            } else if(response.ok) {
                return response
            }
        })
        .catch(e => {
            //网络错误的时候会返回TypeError,所以先用TypeError检测是否为网络错误
            if(e instanceof TypeError) {
                alert("Connection Error")
                return
            }
            alert(e.message)
        })
}

function _handleError(response, callback) {
    let error, message

    switch(response.status) {
        case 0:
            error = 'Connection Error'
            message = 'Cannot connect to website.Please check your netword or try again later.'
            break
        case 403:
            if(response.headers.get('X-RateLimit-Remaining') == 0) {
                error = 'API limit exceeded'
                message = 'You have exceeded the GitHub API minutely or hourly limit, please try later.'
            } else {
                error = 'Forbbiden'
                message = 'You are not allowed to access GitHub\'s API.'
            }
            break
        default:
            error = message = response.statusText
    }

    callback(error, message)
}

export default api
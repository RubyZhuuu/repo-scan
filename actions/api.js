//define all of the apis, based on Github api
import fetch from 'isomorphic-fetch'
const domain = "https://api.github.com"

var api = {
    search: function(q, page, sort) {
        let url = domain + "/search/repositories?q=" + q
        url += page ? '&page=' + page : ''

        return myFetch(url)
            .then(data => data.json())
        
    },
    getReadmeRaw: function(name, owner) {
        let url = domain + '/repos/' + owner + '/' + name + "/readme"

        return myFetch(url)
            .then(data => data.json())
            .then(data => {
                return myFetch(data.download_url)
                .then(response => response.text())
            })
    }
}

const myFetch = function(url) {
    //start loading
    return fetch(url, { Accept: "application/vnd.github.v3+json" })
        .then(response => {
            //stop lading
            if(response.status >= 400) {
                throw new Error("Ops, 捕获一个错误码: " + response.status)
            }

            if(response.ok) {
                return response
            }
        })
        .catch(e => {
            //stop loading
            //网络错误的时候会返回TypeError,所以先用TypeError检测是否为网络错误
            if(e instanceof TypeError) {
                alert("网络错误")
                return
            }
            alert(e.message)
        })
}

export default api
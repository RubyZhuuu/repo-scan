//actions of repo-scan
import fetch from 'isomorphic-fetch'
let url = "https://api.github.com/search/repositories?q=react&sort=stars&order=desc"
let domain = "https://api.github.com"

export const receivedRepoReadme = (readme) => {
    return {
        type: "RECEIVE_REPO_README",
        readme
    }
}

export const receivedList = (data) => {
    return {
        type: "RECEIVED_LIST",
        items: data
    }
}

export function selectRepo(name, owner) {
    return dispatch => {
        let url = domain + '/repos/' + owner.login + '/' + name + "/readme"
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                fetch(data.download_url)
                .then(response => response.text())
                .then(data => {
                    dispatch(receivedRepoReadme(data))
                })
            })
    }
}

export function fetchRepos() {
    return dispatch => {
        return fetch(url) 
            .then(response => response.json())
            .then(data => {
                dispatch(receivedList(data))
            })
    }
}

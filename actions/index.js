//actions of repo-scan
import fetch from 'isomorphic-fetch'
const domain = "https://api.github.com"

export const selectKeyword = (keyword) => {
    return {
        type: "SELECT_KEYWORD",
        keyword
    }
}

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
        let url = domain + '/repos/' + owner + '/' + name + "/readme"
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

export function fetchRepos(keyword, pageNum) {
    var url = domain + "/search/repositories?q=" + keyword
    url += pageNum ? '&page=' + pageNum : ''
    return dispatch => {
        return fetch(url) 
            .then(response => response.json())
            .then(data => {
                dispatch(receivedList(data))
            })
    }
}

export const jumpPage = (pageNum) => {
    return {
        type: "JUMP_PAGE",
        pageNum
    }
}

//actions of repo-scan
import api from './api'
//import fetch from 'isomorphic-fetch'
//const domain = "https://api.github.com"

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
        api.getReadmeRaw(name, owner)
        .then(data => dispatch(receivedRepoReadme(data)))
    }
 }

export function fetchRepos(keyword, pageNum) {
    return dispatch => {
        api.search(keyword, pageNum)
        .then(data => dispatch(receivedList(data)))
    }
}

export const jumpPage = (pageNum) => {
    return {
        type: "JUMP_PAGE",
        pageNum
    }
}

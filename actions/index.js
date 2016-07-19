//actions of repo-scan
import api from './api'

export const selectKeyword = (keyword) => {
    return {
        type: "SELECT_KEYWORD",
        keyword
    }
}

export const receivedRepoReadme = (readme) => {
    return {
        type: "RECEIVED_REPO_README",
        readme
    }
}

export const fetchingRepoReadme = () => {
    return {
        type: "FETCHING_REPO_README"
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
        dispatch(fetchingRepoReadme())
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

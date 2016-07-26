//actions of repo-scan
import api from './api'

export const selectKeyword = (keyword) => {
    return {
        type: "SELECT_KEYWORD",
        keyword
    }
}

export const receivedRepoReadme = (readme, name, owner, github_url, default_branch) => {
    return {
        type: "RECEIVED_REPO_README",
        readme,
        repoInfo: {
            name,
            owner,
            github_url,
            default_branch
        }
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

export function selectRepo(name, owner, github_url, default_branch) {
    return dispatch => {
        dispatch(fetchingRepoReadme())
        api.getReadmeRaw(name, owner, default_branch)
        .then(data => dispatch(receivedRepoReadme(data, name, owner, github_url, default_branch)))
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

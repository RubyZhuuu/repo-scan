//actions of repo-scan
import fetch from 'isomorphic-fetch'

export const selectKeyword = (keyword) => {
    return {
        type: "SELECT_KEYWORD",
        keyword
    }
}

export const receivedList = (data) => {
    return {
        type: "RECEIVED_LIST",
        items: data
    }
}

let url = "https://api.github.com/search/repositories?q=react&sort=stars&order=desc"

function fetchRepos() {
    return dispatch => {
        return fetch(url) 
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(receivedList(data))
            })
    }
}

export default fetchRepos
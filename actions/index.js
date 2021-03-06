//actions of repo-scan
import api from './api'
import { formatUpdatedAt } from '../utils/tools'

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
    const items =  data.items.map(repo => {
        return {
            updated_at: formatUpdatedAt(repo.updated_at),
            owner: repo.owner.login,
            full_name: repo.full_name,
            name: repo.name,
            description: repo.description,
            star_count: repo.stargazers_count,
            github_url: repo.html_url,
            default_branch: repo.default_branch
        }
    })

    data.items = items

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

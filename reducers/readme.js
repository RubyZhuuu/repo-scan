const readme = (state = {
    isLoading: false,
    text: "# repo-scan"
}, action) => {
    switch (action.type) {
        case 'RECEIVED_REPO_README':
            return {
                isLoading: false,
                text: action.readme,
                repoInfo: action.repoInfo
            }
        case 'FETCHING_REPO_README':
            return Object.assign({}, state, { isLoading: true })
        default:
            return state
    }
}

export default readme
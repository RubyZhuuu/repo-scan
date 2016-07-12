const readme = (state = '', action) => {
    switch (action.type) {
        case 'RECEIVE_REPO_README':
            return action.readme
        default:
            return state
    }
}

export default readme
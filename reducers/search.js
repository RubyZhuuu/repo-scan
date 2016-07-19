const search = (state = {
    keyword: "react",
    pageNum: 1,
    isLoading: false
}, action) => {
    switch (action.type) {
        case "RECEIVED_LIST":
            return Object.assign(state, { isLoading: false })
        case "SELECT_KEYWORD":
            return { keyword: action.keyword, pageNum: 1, isLoading: true }
        case "JUMP_PAGE":
            return { keyword: state.keyword, pageNum: action.pageNum, isLoading: true }
        default:
            return state
    }
}

export default search
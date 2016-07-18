const search = (state = {
    keyword: "react",
    pageNum: 1
}, action) => {
    switch (action.type) {
        case "SELECT_KEYWORD":
            return {keyword: action.keyword, pageNum: 1}
        case "JUMP_PAGE":
            return Object.assign({}, state, action.pageNum)
        default:
            return state
    }
}

export default search
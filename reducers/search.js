const search = (state = {
    keyword: "react",
    pageNum: 1
}, action) => {
    switch (action.type) {
        case "SELECT_KEYWORD":
        case "JUMP_PAGE":
            console.log(action)
            return action.search
        default:
            return state
    }
}

export default search
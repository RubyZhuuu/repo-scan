const repos = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVED_LIST': 
            console.log(action.items)
            return action.items
        default:
            return state
    }
}

export default repos
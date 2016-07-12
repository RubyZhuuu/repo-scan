const repos = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVED_LIST': 
            return action.items
        default:
            return state
    }
}

export default repos
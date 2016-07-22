const repos = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVED_LIST': 
            if(action.items)
                return action.items
            else
                return state
        default:
            return state
    }
}

export default repos
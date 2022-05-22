const initialState = {
    BlogNo: 0
}

export default (state = initialState, action) => {
    console.log({action})
    switch (action.type) {

        case "INCREMENT":
            return { ...state,[action.id]: state[action.id]?state[action.id] + 1:1 }

        default:
            return state
    }
}

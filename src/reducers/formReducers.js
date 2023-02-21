
const initialState = {
    name: ''
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT': {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}

export { formReducer }
export default function reducer(state={
    newTempSubmitting: false,
    newTempSubmitted: false,
    error: null
}, action) {
    switch (action.type) {
        case "TEMPLATES_CREATE":
            return {...state, newTempSubmitting: true}
            break;
        case "TEMPLATES_CREATE_FULFILLED":
            return {...state, newTempSubmitting: false, newTempSubmitted: true}
            break;
        case "TEMPLATES_CREATE_REJECTED":
            return {...state, newTempSubmitting: false, newTempSubmitted: false, error: action.payload}
            break;
        default:
            return state;
    }
}

export default function reducer(state={
    defaultTempId: 0,
    prvDefaultTempId: 0,
    err: null
}, action){
    switch (action.type) {
        case "TEMPLATES_DEFAULT_FULFILLED":
            return {...state, prvDefaultTempId: action.payload.prvDefaultTempId, defaultTempId: action.payload.defaultTempId};
            break;
        case "TEMPLATES_DEFAULT_REJECTED":
            return {...state, err: action.payload}
            break;
        default:
            return state;

    }
}

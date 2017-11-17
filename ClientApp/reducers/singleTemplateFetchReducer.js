export default function reducer(state={
    singleTemplate: {},
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch (action.type) {
        case "TEMPLATE_SINGLE_FETCH":
            return {...state, fetching: true}
            break;
        case "TEMPLATE_SINGLE_FETCH_FULFILLED":
            return {...state, fetching: false,  fetched: true, singleTemplate: {...action.payload}};
            break;
            case "TEMPLATE_SINGLE_FETCH_REJECTED":
                return {...state, fetching: true, fetched: true, error: action.payload};
                break;
            default:
                return state;

    }
}

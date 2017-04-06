export default function reducer(state={
    allTemplates: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch (action.type) {
        case "FETCH_TEMPLATES":
            return {...state, fetching: true}
            break;
        case "FETCH_TEMPLATES_FULFILLED":
            return {...state, fetching: false,  fetched: true, allTemplates: [...state.allTemplates, action.payload]};
            break;
        case "FETCH_TEMPLATES_REJECTED":
            return {...state, fetching: true, fetched: true, error: action.payload};
            break;
        default:
            return state;
    }
}

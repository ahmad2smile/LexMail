export default function reducer(state={
    allTemplates: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch (action.type) {
        case "TEMPLATES_FETCH":
            return {...state, fetching: true}
            break;
        case "TEMPLATES_FETCH_FULFILLED":
            return {...state, fetching: false,  fetched: true, allTemplates: [...state.allTemplates, action.payload]};
            break;
        case "TEMPLATES_FETCH_REJECTED":
            return {...state, fetching: true, fetched: true, error: action.payload};
            break;
        default:
            return state;
    }
}

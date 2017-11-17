export default function reducer(state={
    templateEdit: false,
    templateUpdating: false,
    templateUpdated: false,
    error: null
}, action) {
    switch (action.type) {
        case "TEMPLATE_EDIT":
            return {...state, templateEdit: true}
            break;
        case "TEMPLATE_UPDATE":
            return {...state, templateUpdating: true, templateEdit: false}
            break;
        case "TEMPLATE_UPDATE_FULFILLED":
            return {...state, templateUpdating: false, templateUpdated: true}
            break;
        case "TEMPLATE_UPDATE_REJECTED":
            return {...state, templateUpdated: false, error: action.payload}
            break;
        default:
            return state;
    }
}

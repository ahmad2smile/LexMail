import axios from "axios";

export function getAllTemplates() {
    return (dispatch) => axios.get("http://localhost:3000/templates")
            .then((response)=>{
                dispatch({
                    type: "FETCH_TEMPLATES_FULFILLED",
                    payload: response.data
                });
            })
            .catch((err)=>{
                dispatch({
                    type: "FETCH_TEMPLATES_REJECTED",
                    payload: err
                });
            });
}

export function setDefaultTemplate(prvDefaultTempId, id) {
    axios.patch( `http://localhost:3000/templates/${prvDefaultTempId}`, { "templateDefault": false } )
    return (dispatch) => axios.patch( `http://localhost:3000/templates/${id}`, { "templateDefault": true } )
            .then((response) =>{
                dispatch({
                    type: "SET_DEFAULT_TEMPLATE",
                    payload: response
                });
            });
}

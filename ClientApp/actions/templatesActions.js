import axios from "axios";

export function getAllTemplates(params) {
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

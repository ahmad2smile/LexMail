import axios from "axios";

export function getAllTemplates() {
    return (dispatch) => axios.get("http://localhost:3000/templates")
            .then((response)=>{
                dispatch({
                    type: "TEMPLATES_FETCH_FULFILLED",
                    payload: response.data
                });
            })
            .catch((err)=>{
                dispatch({
                    type: "TEMPLATES_FETCH_REJECTED",
                    payload: err
                });
            });
}

export function setDefaultTemplate(prvDefaultTempId, defaultTempId) {
    return (dispatch) => {
        dispatch({
            type: "TEMPLATES_DEFAULT_FULFILLED",
            payload: {prvDefaultTempId: prvDefaultTempId, defaultTempId: defaultTempId}
        });
        axios.patch( `http://localhost:3000/templates/${prvDefaultTempId}`, { "templateDefault": false } )
        axios.patch( `http://localhost:3000/templates/${defaultTempId}`, { "templateDefault": true } )
            .catch((err) =>{
                dispatch({
                    type: "TEMPLATES_DEFAULT_REJECTED",
                    payload: err
                });
            });
        }
}

export function createNewTemplate(newTempData) {
    return (dispatch)=>{
        axios.post(`http://localhost:3000/templates`,{
            "id": 4,
            "templateTagLetter": newTempData.newTempTag,
            "templateName": newTempData.newTempName,
            "templateCTime": "4/18/2015",
            "templateDefault": false,
            "randomNum": 6,
            "templateBody": newTempData.newTempBody
        })
        .then((response)=>{
            dispatch({
                type: "TEMPLATES_CREATE_FULFILLED",
                payload: response
            });
        })
        .catch((err)=>{
            dispatch({
                type: "TEMPLATES_CREATE_REJECTED",
                payload: err
            });
        });
    }
}

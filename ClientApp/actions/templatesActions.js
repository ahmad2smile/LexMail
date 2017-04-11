import axios from "axios";

export function getAllTemplates() {
    return (dispatch) => axios.get("/api/templates")
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

export function getSingleTemplate(id){
    return (dispatch)=> axios.get(`/api/templates/${id}`)
            .then((response)=>{
                dispatch({
                    type: "TEMPLATE_SINGLE_FETCH_FULFILLED",
                    payload: response.data
                });
            })
            .catch((err)=>{
                dispatch({
                    type: "TEMPLATE_SINGLE_FETCH_REJECTED",
                    payload: err
                });
            });
}

export function setDefaultTemplate(prvDefaultTemp, defaultTemp) {
    return (dispatch) => {
        dispatch({
            type: "TEMPLATES_DEFAULT_FULFILLED",
            payload: {prvDefaultTempId: prvDefaultTemp.id, defaultTempId: defaultTemp.id}
        });
        axios.put(`/api/templates/${prvDefaultTemp.id}`, {
            "id": prvDefaultTemp.id,
            "templateTagLetter": "X",
            "templateName": prvDefaultTemp.templateName,
            "templateCTime": "2017-04-11T13:16:55.1841504",
            "templateDefault": false,
            "randomNum": 6,
            "templateBody": prvDefaultTemp.templateBody
        });
        axios.put(`/api/templates/${defaultTemp.id}`, {
            "id": defaultTemp.id,
            "templateTagLetter": "X",
            "templateName": defaultTemp.templateName,
            "templateCTime": "2017-04-11T13:16:55.1841504",
            "templateDefault": true,
            "randomNum": 6,
            "templateBody": defaultTemp.templateBody
        })
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
        axios.post(`/api/templates`,{
            "id": 4,
            "templateTagLetter": "X",
            "templateName": newTempData.newTempName,
            "templateCTime": "2017-04-11T13:16:55.1841504",
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

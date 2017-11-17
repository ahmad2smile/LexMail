import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { getSingleTemplate, updateSingleTemplate } from "../../../actions/templatesActions";

@connect((store) =>{
    return {
        singleTemplate: store.singleTemplateFetch.singleTemplate,
        fetching: store.singleTemplateFetch.fetching,
        fetched: store.singleTemplateFetch.fetched,
        errorFetch: store.singleTemplateFetch.error,

        templateEdit: store.templatesUpdate.templateEdit,
        templateUpdating: store.templatesUpdate.templateUpdating,
        templateUpdated: store.templatesUpdate.templateUpdated,
        errorUpdate: store.templatesUpdate.error,
    };
})
class ViewTemplate extends React.Component {

    componentWillMount(){
        this.props.dispatch(getSingleTemplate(this.props.params.templateId));
    }

    submitUpdateForm(e){
        e.preventDefault();

        const templateEdit = this.props.templateEdit;
        const singleTemplate = this.props.singleTemplate;
        let formData = new FormData(e.target);

        let updatedTemp = {
            "id": singleTemplate.id,
            "templateTagLetter": singleTemplate.templateTagLetter,
            "templateName": formData.get("changedTempName"),
            "templateCTime": singleTemplate.templateCTime,
            "templateDefault": singleTemplate.templateDefault,
            "randomNum": singleTemplate.randomNum,
            "templateBody": formData.get("changedTempBody")
        }

        if (!templateEdit) {
            e.target.querySelectorAll("button")[0].innerText =  "Save";
        }
        else {
            e.target.querySelectorAll("button")[0].innerText =  "Saving...";
        }

        this.props.dispatch(updateSingleTemplate(updatedTemp, templateEdit));
    }

    renderFetchedData(){
        const fetching = this.props.fetching;
        const fetched = this.props.fetched;
        const { templateName, templateBody } = this.props.singleTemplate;
        const templateEdit = this.props.templateEdit;
        const templateUpdated = this.props.templateUpdated;

        if(!fetching && fetched){
            return (
                <form action="/api/templates/" onSubmit={(e)=> this.submitUpdateForm(e)}>
                    <div className="viewTempHead">
                        <div className="viewTitle">
                            <input
                                disabled = { !templateEdit }
                                name="changedTempName"
                                className="tempNameInput"
                                defaultValue={ templateName }/>
                        </div>
                        <Button
                            type="submit"
                            className="defaultLexBtn"
                            waves="light"
                            >Edit</Button>
                    </div>
                    <hr/>
                    <div className="viewTempBody">
                        <textarea
                            disabled={ !templateEdit }
                            name="changedTempBody"
                            className="tempBodyTextArea materialize-textarea"
                            defaultValue={ templateBody }/>
                    </div>
                </form>
            );
        }
        return <div>Fetching Data...</div>
    }

    render () {
        if (!this.props.templateUpdating && this.props.templateUpdated) {
            window.location.replace("/templates");
        }
        return (
            <div className="newContainer viewTempContainer">
                {this.renderFetchedData()}
            </div>
        );
    }
}

export default ViewTemplate;

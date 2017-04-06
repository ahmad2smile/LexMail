import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { Row, Input, Button } from "react-materialize";

import { createNewTemplate } from "../../../actions/templatesActions";

@connect((store)=>{
    return{
        newTempSubmitting: store.templatesCreate.newTempSubmitting,
        newTempSubmitted: store.templatesCreate.newTempSubmitted,
        error: store.templatesCreate.error
    };
})
class NewTemplate extends React.Component {
    newTemplateFormHandler(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let newTempData = {
            newTempName: formData.get("newTempName"),
            newTempTag: formData.get("newTempName").charAt(0),
            newTempBody: formData.get("newTempBody")
        }
        this.props.dispatch(createNewTemplate(newTempData));
    }
    render() {
        if (!this.props.newTempSubmitting && this.props.newTempSubmitted) {
            window.location.replace("/templates");
        }
        return (
            <Row className="newContainer newTemplateContainer">
                <div >
                    <div className="newTemplateHead">New Template</div>
                    <form action="/templates" onSubmit={e => this.newTemplateFormHandler(e)}>
                        <Input l={12} name="newTempName" label="Template Name"  style={{width:"100%"}}/>
                        <textarea name="newTempBody" className="materialize-textarea"></textarea>
                        <Button type="submit" waves="light">Save</Button>
                    </form>
                </div>
            </Row>
        );
    }
}

export default NewTemplate;

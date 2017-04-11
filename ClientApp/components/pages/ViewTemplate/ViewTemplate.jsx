import React, { PropTypes } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { getSingleTemplate } from "../../../actions/templatesActions";

@connect((store) =>{
    return {
        singleTemplate: store.singleTemplateFetch.singleTemplate,
        fetching: store.singleTemplateFetch.fetching,
        fetched: store.singleTemplateFetch.fetched,
        error: store.singleTemplateFetch.error
    };
})
class ViewTemplate extends React.Component {

    componentWillMount(){
        this.props.dispatch(getSingleTemplate(this.props.params.templateId));
    }

    render () {
        return (
            <div className="newContainer viewTempContainer">
                <div className="viewTempHead">
                    <div className="viewTitle">Template: {this.props.singleTemplate.templateName}</div>
                    <Button className="defaultLexBtn" waves="light">Edit</Button>
                </div>
                <hr/>
                <div className="viewTempBody">
                    <div>{this.props.singleTemplate.templateBody}</div>
                </div>
            </div>
        )
    }
}

export default ViewTemplate;

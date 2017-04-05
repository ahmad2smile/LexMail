import React, {PropTypes} from "react";
import { Row, Input, Button } from "react-materialize";

class NewTemplate extends React.Component {
    render() {
        return (
            <Row className="newContainer newTemplateContainer">
                <div >
                    <div className="newTemplateHead">New Template</div>
                    <form action="/">
                        <Input l={12} label="Template Name"  style={{width:"100%"}}/>
                        <textarea className="materialize-textarea"></textarea>
                        <Button waves="light">Save</Button>
                    </form>
                </div>
            </Row>
        );
    }
}

export default NewTemplate;

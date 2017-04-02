import React, {PropTypes} from "react";
import {Layout, Grid, Cell, Textfield, Button} from "react-mdl";

class NewTemplate extends React.Component {
    render() {
        return (
            <Grid className="newContainer newTemplateContainer">
                <Cell col={12}>
                    <div className="newTemplateHead">New Template</div>
                    <form action="/">
                        <Cell col={12}>
                            <Textfield onChange={() => {}} required label="Template Name" floatingLabel style={{width:"100%"}}/>
                        </Cell>
                        <Cell className="newTemplateBody" col={12}>
                            <Textfield label="" required rows={3} style={{width:"100%"}}/>
                        </Cell>
                        <Cell col={12}>
                            <Button raised ripple>Save</Button>
                        </Cell>
                    </form>
                </Cell>
            </Grid>
        );
    }
}

export default NewTemplate;

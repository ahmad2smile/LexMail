import * as React from "react";
import { Grid, Cell } from "react-mdl";
import { connect } from "react-redux";

import TempBoxes from "./TempBoxes/TempBoxes";
import { getAllTemplates } from "../../../actions/templatesActions";

@connect((store)=>{
    return {
        allTemplates: store.templates.allTemplates,
        fetching: store.templates.fetching,
        fetched: store.templates.fetched,
        error: store.templates.error
    };
})
class Templates extends React.Component {
    constructor(){
        super();

        this.state = {
            defaultSelected: false
        }
    }

    componentWillMount(){
        this.props.dispatch(getAllTemplates());
    }

    defaulSelectHandler(boxData, e){
        if (e.target !== e.currentTarget) {
            console.log(this.props.allTemplates);
        }
        e.stopPropagation();
    }

    renderAllTemplates(){
        let allTempBoxes = [];
        if(!this.props.fetching && this.props.fetched){
            allTempBoxes = this.props.allTemplates[0]
                            .map((boxData, i)=>{
                                return (
                                    <Cell key={i}>
                                        <TempBoxes
                                            onClick={e => this.defaulSelectHandler(boxData, e)}
                                            {...boxData}
                                            />
                                    </Cell>
                                );
                            });
        }
        return allTempBoxes;
    }

    render() {
        return (
            <Grid>
                {this.renderAllTemplates()}
            </Grid>
        );
    }
}

export default Templates

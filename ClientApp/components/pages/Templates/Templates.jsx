import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-materialize";

import TempBoxes from "./TempBoxes/TempBoxes";
import { getAllTemplates, setDefaultTemplate } from "../../../actions/templatesActions";

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
            defaultTempId: 0,
            prvDefaultTempId: 0
        }
    }

    componentWillMount(){
        this.props.dispatch(getAllTemplates());
    }

    defaulSelectHandler(boxData, e){
        if (e.target !== e.currentTarget && boxData.id !== this.state.defaultTempId) {
            console.log(this.state.defaultTempId);
            let prvDefaultTemp = this.props.allTemplates[0].find( (item) => {
                if (item.templateDefault) return item.id
            });
            this.setState({
                defaultTempId: boxData.id,
                prvDefaultTempId: prvDefaultTemp.id
            });
            this.props.dispatch(setDefaultTemplate(prvDefaultTemp.id, boxData.id));
        }
        e.stopPropagation();
    }

    renderAllTemplates(){
        let allTempBoxes = [];
        if(!this.props.fetching && this.props.fetched){
            allTempBoxes = this.props.allTemplates[0]
                            .map((boxData, i)=>{
                                if (this.state.defaultTempId === boxData.id) {
                                    boxData.templateDefault = true;
                                }
                                if(this.state.prvDefaultTempId === boxData.id && this.state.prvDefaultTempId !== this.state.defaultTempId){
                                    boxData.templateDefault = false;
                                }
                                return (
                                    <Col l={4} key={i}>
                                        <TempBoxes
                                            onClick={e => this.defaulSelectHandler(boxData, e)}
                                            {...boxData}
                                            />
                                    </Col>
                                );
                            });
        }
        return allTempBoxes;
    }

    render() {
        return (
            <Row>
                {this.renderAllTemplates()}
            </Row>
        );
    }
}

export default Templates

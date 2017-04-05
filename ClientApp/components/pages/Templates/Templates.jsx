import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-materialize";

import TempBoxes from "./TempBoxes/TempBoxes";
import { getAllTemplates, setDefaultTemplate } from "../../../actions/templatesActions";

@connect((store)=>{
    return {
        allTemplates: store.templatesFetch.allTemplates,
        fetching: store.templatesFetch.fetching,
        fetched: store.templatesFetch.fetched,
        error: store.templatesFetch.error,
        defaultTempId: store.templatesDefault.defaultTempId,
        prvDefaultTempId: store.templatesDefault.prvDefaultTempId
    };
})
class Templates extends React.Component {
    componentWillMount(){
        this.props.dispatch(getAllTemplates());
    }

    defaulSelectHandler(boxData, e){
        if (e.target !== e.currentTarget && boxData.id !== this.props.defaultTempId) {
            let prvDefaultTemp = this.props.allTemplates[0].find( (item) => {
                if (item.templateDefault) return item.id
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
                                if (this.props.defaultTempId === boxData.id) {
                                    boxData.templateDefault = true;
                                }
                                if(this.props.prvDefaultTempId === boxData.id && this.props.prvDefaultTempId !== this.props.defaultTempId){
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

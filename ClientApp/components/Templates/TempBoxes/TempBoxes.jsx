import React, { PropTypes } from "react";

import FolderIcon from "../../../icons/FolderIcon";
import RightArrowIcon from "../../../icons/RightArrowIcon";

class TempBoxes extends React.Component {
    constructor(){
        super();
        this.randomNum = 1
    }

    /*
    ████████  ██████  ██████   ██████
       ██    ██    ██ ██   ██ ██    ██
       ██    ██    ██ ██   ██ ██    ██
       ██    ██    ██ ██   ██ ██    ██
       ██     ██████  ██████   ██████
    */
    // TODO: Take ramdom image url from API
    componentWillMount(){
        this.randomNum = Math.floor(Math.random() * 10);
    }

    render () {

        let boxBg = `http://lorempixel.com/228/205/nightlife/`+this.randomNum;
        // let boxBg = `something for dev`+this.randomNum;

        return (
            <div className="boxContainer">
                <a href="#" className="templateRefBox">
                    <div className="bgImageContainer">
                        <div className="templateTag">{this.props.templateTagLetter}</div>
                        <div className="templateName">{this.props.templateName}</div>
                        <div className="templateCTime">{this.props.templateCTime}</div>
                        <img src={boxBg}/>
                    </div>
                </a>
                <a href="#" className="defaultSelectBox">
                    <RightArrowIcon/><FolderIcon/>
                </a>
            </div>
        )
    }
}

export default TempBoxes;

import React, { PropTypes } from "react";

import FolderIcon from "../../../../icons/FolderIcon";
import RightArrowIcon from "../../../../icons/RightArrowIcon";

class TempBoxes extends React.Component {
    render () {

        // let boxBg = `http://lorempixel.com/228/205/nightlife/`+this.props.randomNum;
        let boxBg = `something for dev`+ this.props.randomNum;
        let selectBg = this.props.templateDefault ? "#C34E22" : "transparent";

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
                <a style={{backgroundColor: selectBg}} onClick={this.props.onClick} href="#" className="defaultSelectBox">
                    <RightArrowIcon/><FolderIcon/>
                </a>
            </div>
        )
    }
}

export default TempBoxes;

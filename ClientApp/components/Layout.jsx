import * as React from "react";
import { Content } from "react-mdl";

import Sidebar from "./Sidebar/Sidebar";
import FolderIcon from "../icons/FolderIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

import "../../node_modules/react-mdl/extra/material";

export class Layout extends React.Component {
    render() {
        return (<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <Sidebar />
                <Content>
                    <div className="topBar">
                        <div className="topBarUpper">TopBar Upper</div>
                        <div className="topBarLowwer">
                            <div className="topBarPageName"><RightArrowIcon /><FolderIcon /> {this.props.location.pathname}</div>
                            <div className="topBarStatus">LexMail active right now</div>
                        </div>
                    </div>
                    <div className="mainContent">
                        {this.props.body}
                    </div>
                </Content>
            </div>);
    }
}

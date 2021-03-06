import * as React from "react";

import Sidebar from "./Sidebar/Sidebar";
import MobielSideNav from "./MobielSideNav/MobielSideNav";
import FolderIcon from "../icons/FolderIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

export class Layout extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <Sidebar />
                <MobielSideNav />
                <div className="mdl-layout__content">
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
                </div>
            </div>);
    }
}

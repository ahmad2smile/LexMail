import * as React from "react";
import {Link} from "react-router";

import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="mdl-layout__drawer" style={{left: this.props.leftPos}}>
                <div className="mdl-layout-title"><TitleIcons /></div>
                <hr/>
                <div className="mdl-navigation">
                    <a className="appName mdl-navigation__link" disabled><FolderIcon/>LexMail</a>

                    <Link to={"/"} className="mdl-navigation__link" activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Dashboard</span>
                    </Link>

                    <Link to={"/templates"} className="mdl-navigation__link" activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Templates</span>
                    </Link>

                    <Link to={"/fetchdata"} className="mdl-navigation__link" activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Fetch data</span>
                    </Link>

                    <div  className="mdl-navigation__link">
                        <Link to={"/newtemplate"} activeClassName="activeLink_myCustomClass">
                            {< FillFolderIcon />}
                            <span>  New Template</span>
                        </Link>
                        <Link to={"/config"} activeClassName="activeLink_myCustomClass">
                            {< SettingsIcon />}
                            <span>  Config</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sidebar;

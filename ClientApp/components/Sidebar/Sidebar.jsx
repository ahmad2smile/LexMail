import * as React from "react";
import {Link} from "react-router";
import {Drawer, Navigation} from "react-mdl";

import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

class Sidebar extends React.Component {
    render() {
        return (
            <Drawer title={<TitleIcons />}>
                <hr/>
                <Navigation>
                    <a className="appName" disabled><FolderIcon/>LexMail</a>

                    <Link to={"/"} activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Dashboard</span>
                    </Link>

                    <Link to={"/templates"} activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Templates</span>
                    </Link>

                    <Link to={"/fetchdata"} activeClassName="activeLink_myCustomClass">
                        <FolderIcon/>
                        <span>Fetch data</span>
                    </Link>

                    <div>
                        <Link to={"/newtemplate"} activeClassName="activeLink_myCustomClass">
                            {< FillFolderIcon />}
                            <span>  New Template</span>
                        </Link>
                        <Link to={"/config"} activeClassName="activeLink_myCustomClass">
                            {< SettingsIcon />}
                            <span>  Config</span>
                        </Link>
                    </div>
                </Navigation>
            </Drawer>
        );
    }
}
export default Sidebar;

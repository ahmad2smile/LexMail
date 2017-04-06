import React, { PropTypes } from "react";
import { SideNav, SideNavItem } from "react-materialize";

import ListIcon from "../../icons/ListIcon";
import Sidebar from "../Sidebar/Sidebar";
import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

class MobielSideNav extends React.Component {
    render () {
        const btn = <div role="button" className="sideNavToggleBtn hide-on-large-only">
            <ListIcon />
        </div>;
        return(
            <SideNav trigger={btn} options={{ closeOnClick: true }} >
                <br/>
                <br/>
                <br/>
                <a className="appName mdl-navigation__link" disabled><FolderIcon/>LexMail</a>

                <SideNavItem href="/" className="mdl-navigation__link activeLink_myCustomClass">
                    <FolderIcon/>
                    <span>Dashboard</span>
                </SideNavItem>

                <SideNavItem href="/templates" className="mdl-navigation__link activeLink_myCustomClass">
                    <FolderIcon/>
                    <span>Templates</span>
                </SideNavItem>

                <SideNavItem href="/fetchdata" className="mdl-navigation__link activeLink_myCustomClass">
                    <FolderIcon/>
                    <span>Fetch data</span>
                </SideNavItem>

                <div  className="mdl-navigation__link">
                    <SideNavItem href="/newtemplate" className="activeLink_myCustomClass">
                        {< FillFolderIcon />}
                        <span>  New Template</span>
                    </SideNavItem>
                    <br/>
                    <SideNavItem href="/config" className="activeLink_myCustomClass">
                        {< SettingsIcon />}
                        <span>  Config</span>
                    </SideNavItem>
                </div>
            </SideNav>
        );
    }
}

export default MobielSideNav;

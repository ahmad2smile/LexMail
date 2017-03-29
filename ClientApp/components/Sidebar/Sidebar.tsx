import * as React from "react";
import { Link } from "react-router";
import { Drawer, Navigation } from "react-mdl";

import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

interface ISidebarProps {}

interface ISidebarState {}

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    public render() {
        const folderIcon = <FolderIcon/>;
        const titleIcons = <TitleIcons/>;
        const fillFolderIcon = <FillFolderIcon/>;
        const settingsIcon = <SettingsIcon/>;

        return (
                <Drawer title={titleIcons}>
                <hr/>
                    <Navigation>
                        <a className="appName" disabled>{folderIcon} LexMail</a>
                        <Link to={"/"} >
                            {folderIcon} <span>Home</span>
                        </Link>
                        <Link to={"/counter"} >
                            {folderIcon} <span>Counter</span>
                        </Link>
                        <Link to={"/fetchdata"} >
                            {folderIcon} <span>Fetch data</span>
                        </Link>
                        <div>
                            <a href="#">{fillFolderIcon}<span> New Template</span></a>
                            <a href="#">{settingsIcon}<span> Config</span></a>
                        </div>
                    </Navigation>
                </Drawer>
        );
    }
}

export default Sidebar;﻿

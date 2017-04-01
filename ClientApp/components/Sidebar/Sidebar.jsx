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

                    <Link to={"/"}>
                        <FolderIcon/>
                        <span>Home</span>
                    </Link>

                    <Link to={"/templates"}>
                        <FolderIcon/>
                        <span>Templates</span>
                    </Link>

                    <Link to={"/fetchdata"}>
                        <FolderIcon/>
                        <span>Fetch data</span>
                    </Link>

                    <div>
                        <a href="#">{< FillFolderIcon />}
                            <span>  New Template</span>
                        </a>
                        <a href="#">{< SettingsIcon />}
                            <span>  Config</span>
                        </a>
                    </div>
                </Navigation>
            </Drawer>
        );
    }
}
export default Sidebar;

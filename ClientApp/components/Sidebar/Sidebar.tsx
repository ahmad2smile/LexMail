import * as React from "react";
import { Link } from "react-router";
import { Drawer, Navigation } from "react-mdl";

interface ISidebarProps {}

interface ISidebarState {}

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    public render() {
        return (
                <Drawer title="Title Here">
                    <Navigation>
                        <a className="appName" disabled>LexMail</a>
                        <Link to={"/"} >
                            Home
                        </Link>
                        <Link to={"/counter"} >
                            Counter
                        </Link>
                        <Link to={"/fetchdata"} >
                            Fetch data
                        </Link>
                    </Navigation>
                </Drawer>
        );
    }
}

export default Sidebar;﻿

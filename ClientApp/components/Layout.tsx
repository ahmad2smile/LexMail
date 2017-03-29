import * as React from "react";
import { Content } from "react-mdl";

import Sidebar from "./Sidebar/Sidebar";

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <Sidebar />
                <Content>
                    <div className="topBar">
                        <div className="topBarUpper">TopBar Upper</div>
                        <div className="topBarLowwer">
                            <div className="topBarPageName">Home</div>
                            <div className="topBarStatus">LexMail active</div>
                        </div>
                    </div>
                    <div className="mainContent">
                        { this.props.body }
                    </div>
                </Content>
            </div>
    );
    }
}

import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router";
import { Drawer } from "react-mdl";

import Sidebar from "./Sidebar";
import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

describe("Sidebar", () => {

    it('contains a SettingsIcon', () => {
        expect(shallow( <Sidebar /> ).contains( <SettingsIcon /> )).toBe(true);
    });

    it('contains 4 FolderIcon', () => {
        expect(shallow( <Sidebar /> ).find(FolderIcon).length).toBe(4);
    });

    it('contains 1 FillFolderIcon', () => {
        expect(shallow( <Sidebar /> ).find(FillFolderIcon).length).toBe(1);
    });

    it('contains 1 TitleIcons', () => {
        expect(shallow( <Sidebar /> ).find(TitleIcons).length).toBe(1);
    });

    it('contains 3 Links', () => {
        expect(shallow( <Sidebar /> ).find(Link).length).toBe(5);
    });

});

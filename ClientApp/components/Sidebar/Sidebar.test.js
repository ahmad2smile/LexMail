import React from "react";
import { shallow } from "enzyme";

import Sidebar from "./Sidebar";
import FolderIcon from "../../icons/FolderIcon";
import TitleIcons from "../../icons/TitleIcons";
import FillFolderIcon from "../../icons/FillFolderIcon";
import SettingsIcon from "../../icons/SettingsIcon";

describe("Sidebar",()=>{

    it('contains a SettingsIcon', () => {
        expect(shallow(<Sidebar/>).contains(<SettingsIcon />)).toBe(true);
      });
    it('contains a FolderIcon', () => {
        expect(shallow(<Sidebar/>).find(FolderIcon).length).toBe(4);
      });
});

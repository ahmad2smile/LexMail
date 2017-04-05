import React, { PropTypes } from "react";
import { shallow } from "enzyme";

import TempBoxes from "./TempBoxes";
import FolderIcon from "../../../../icons/FolderIcon";
import RightArrowIcon from "../../../../icons/RightArrowIcon";

describe("Template Box",()=>{
    it("has class boxContainer",()=>{
        expect(shallow(<TempBoxes/>).hasClass("boxContainer")).toBe(true);
    });

    it("contains 2 a tags",()=>{
        expect(shallow(<TempBoxes/>).find("a").length).toBe(2);
    });

    it("a link has class templateRefBox",()=>{
        expect(shallow(<TempBoxes/>).find(".templateRefBox").length).toBe(1);
    });

    it("div has class bgImageContainer",()=>{
        expect(shallow(<TempBoxes/>).find(".bgImageContainer").length).toBe(1);
    });

    it("div has class templateTag",()=>{
        expect(shallow(<TempBoxes/>).find(".templateTag").length).toBe(1);
    });

    it("div has class templateName",()=>{
        expect(shallow(<TempBoxes/>).find(".templateName").length).toBe(1);
    });

    it("div has class templateCTime",()=>{
        expect(shallow(<TempBoxes/>).find(".templateCTime").length).toBe(1);
    });

    it("has img tag",()=>{
        expect(shallow(<TempBoxes/>).find(".templateCTime").length).toBe(1);
    });

    it("a link has class defaultSelectBox",()=>{
        expect(shallow(<TempBoxes/>).find(".defaultSelectBox").length).toBe(1);
    });

    it("a link has RightArrowIcon",()=>{
        expect(shallow(<TempBoxes/>).find(RightArrowIcon).length).toBe(1);
    });

    it("a link has FolderIcon",()=>{
        expect(shallow(<TempBoxes/>).find(FolderIcon).length).toBe(1);
    });
});

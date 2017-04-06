import React, { PropTypes } from "react";
import { Grid, Cell, Chip, ChipContact } from "react-mdl";
import { shallow } from "enzyme";

import Config from "./Config";

describe("Config Page", ()=>{

    it("has className .newContainer", ()=>{
        expect(shallow(<Config/>).hasClass("newContainer")).toBe(true);
    });

    it("has className .configContainer", ()=>{
        expect(shallow(<Config/>).hasClass("configContainer")).toBe(true);
    });

    it("has className .configHead", ()=>{
        expect(shallow(<Config/>).find("div").hasClass("configHead")).toBe(true);
    });
});

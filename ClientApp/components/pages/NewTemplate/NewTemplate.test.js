import React from "react";
import { Cell, Textfield, Button } from "react-mdl";
import { shallow } from "enzyme";

import NewTemplate from "./NewTemplate";

describe("New Tamplate Page",()=>{
    it("has class newContainer",()=>{
        expect(shallow(<NewTemplate/>).hasClass("newContainer")).toBe(true);
    });

    it("has class newTemplateContainer",()=>{
        expect(shallow(<NewTemplate/>).hasClass("newTemplateContainer")).toBe(true);
    });

    it("div has class newTemplateHead",()=>{
        expect(shallow(<NewTemplate/>).find(".newTemplateHead").length).toBe(1);
    });

    it("has a form",()=>{
        expect(shallow(<NewTemplate/>).find("form").length).toBe(1);
    });

    it("has a class newTemplateBody",()=>{
        expect(shallow(<NewTemplate/>).find(".newTemplateBody").length).toBe(1);
    });

    it("has 2 Textfield",()=>{
        expect(shallow(<NewTemplate/>).find(Textfield).length).toBe(2);
    });

    it("has a Button",()=>{
        expect(shallow(<NewTemplate/>).find(Button).length).toBe(1);
    });
});

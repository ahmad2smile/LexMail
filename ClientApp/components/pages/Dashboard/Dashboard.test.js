import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard";

describe("Dashboard Page",()=>{
    it("Says Site not Ready Yet",()=>{
        expect(shallow(<Dashboard/>).find("h4").text()).toBe("The site is not Ready Yet!");
    });
});

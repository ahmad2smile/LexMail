import React from "react";
import { Grid, Cell } from "react-mdl";
import { connect, Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import configureStore from "../../../configureStore";
import Templates from "./Templates";
import TempBoxes from "./TempBoxes/TempBoxes";
import { getAllTemplates, setDefaultTemplate } from "../../../actions/templatesActions";


let miniProps = {
    allTemplates: [{
        "id": 1,
        "templateTagLetter": "W",
        "templateName": "bla bla bla",
        "templateCTime": "4/18/2015",
        "templateDefault": true,
        "randomNum": 1
        }],
    fetching: false,
    fetched: false,
    error: null
};

const mockStore = configureStore();

const wrapper = mount(<Provider store={mockStore}>
            <Templates {...miniProps} />
        </Provider>
);

describe("Template Page",()=>{
    it("renders",()=>{
        expect(wrapper.length).toBe(1);
    });
});

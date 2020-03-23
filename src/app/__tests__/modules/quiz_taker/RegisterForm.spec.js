import React from "react";
import { shallow } from "enzyme";

import {RegisterForm} from "../../../modules/quiz_taker/components/RegisterForm/RegisterForm";
import { REGISTER_MESSAGE } from "../../../config/messages";

describe('HeaderComponent', ()=>{
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<RegisterForm />);
    })

    it('Does not contain any regressions', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders correctly', () => {
        expect(wrapper.exists()).toMatchSnapshot();
    });

    it('Contains the expected header text', () => {
        expect(wrapper.find('h2').text()).toBe(REGISTER_MESSAGE);
    })
})
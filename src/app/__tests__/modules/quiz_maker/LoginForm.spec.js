import React from "react";
import { shallow } from "enzyme";

import {LoginForm} from "../../../modules/quiz_maker/components/LoginForm/LoginForm";
import { LOGIN_FORM_MESSAGE } from "../../../config/messages";

describe('HeaderComponent', ()=>{
    let wrapper;

    beforeEach( () => {
        const baseProps = {
            password: '',
            username: '',
            loginFormUpdated: '',
            loginFormCompleted: jest.fn(),
            loginSuccess: jest.fn(),
            loginFailed:jest.fn()
          }
        wrapper = shallow(<LoginForm {...baseProps} />);
    })

    it('Does not contain any regressions', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders correctly', () => {
        expect(wrapper.exists()).toMatchSnapshot();
    });

    it('Contains the expected header text', () => {
        console.log(wrapper.find('form').text());
        
        expect(wrapper.find('h2').text()).toBe(LOGIN_FORM_MESSAGE);
    })
})
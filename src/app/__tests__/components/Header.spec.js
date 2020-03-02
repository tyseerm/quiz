import React from "react";
import { shallow } from "enzyme";

import Header from "../../components/Header";

describe('HeaderComponent', ()=>{
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<Header />);
    })

    it('Does not contain any regressions', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders correctly', () => {
        expect(wrapper.exists()).toMatchSnapshot();
    });

    it('Contains the expected header text', () => {
        const result = wrapper.find('h1').text();
        expect(result).toBe('Welcome to the quiz App!');
    })
})
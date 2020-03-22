import React from "react";
import { shallow } from "enzyme";

import Button from '../../commons/components/Button';


describe("ButtonComponent", () => {
    let mockFunction = jest.fn();

    const baseProps = {
        value: 'test',
        onClick: mockFunction
    }

    let wrapper;
    beforeEach(()=>{
        
        wrapper = shallow(<Button {...baseProps}/>)
    })
    

    it('Should calls onClick function when clicked', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        const callCount = mockFunction.mock.calls.length;
        expect(callCount).toBe(1);
    })


})
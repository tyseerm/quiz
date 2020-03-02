import React from "react";
import { shallow } from "enzyme";

import Notification from "../../components/Notification";

describe("NotificationComponent", () => {
  describe("When show  notification", () => {
    const baseProbs = {
      show: true,
      type: "success",
      message: "Awesome!",
      details: "You achived full score"
    };

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notification {...baseProbs} />);
    });

    it('Shows success alert', () => {
        const result = wrapper.find('div.alert-success');

        expect(result.exists()).toBe(true);
    })


  });

  describe("When notification shouldn't show", () => {
    const baseProbs = {
      show: false,
      type: "success",
      message: "Awesome!",
      details: "You achived full score"
    };

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notification {...baseProbs} />);
    });

    it('Doesn\'t show success alert', () => {
        const result = wrapper.find('div.alert-success');

        expect(result.exists()).toBe(false);
    })

    it('it redirects to different page', () => {
        const result = wrapper.text();
        expect(result).toBe('<Redirect />');
    })


  });
});

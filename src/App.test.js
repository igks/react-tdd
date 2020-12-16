import { shallow } from "enzyme";
import App from "./App";

describe("App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("No test", () => {
    expect(wrapper.find("#test").text()).toBe("Hello");
  });
});

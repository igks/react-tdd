import { shallow } from "enzyme";
import Counter from "./Counter";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("Render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("Render a button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("Render a button with text of decrement", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });

  test("Render initial counter value in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("Render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("Render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("Prevent minus value of counter when decrement button was click", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});

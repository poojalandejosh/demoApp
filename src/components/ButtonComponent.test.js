import { render } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";

describe("renders Button component ", () => {
  it("Button component", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ButtonComponent />
      </Provider>
    );

    expect(getByRole("btnForScreen")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

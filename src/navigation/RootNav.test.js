import { render } from "@testing-library/react";
import RootNav from "./RootNav";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";

describe("renders Root Nav screen", () => {
  it("Root Nav", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <RootNav />
      </Provider>
    );

    expect(getByRole("rootNavView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

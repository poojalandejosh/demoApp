import { render, screen } from "@testing-library/react";
import CustomerLogin from "./CustomerLogin";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Customer login screen", () => {
  it('customer login"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CustomerLogin />
      </Provider>
    );

    expect(getByRole("customerRootView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

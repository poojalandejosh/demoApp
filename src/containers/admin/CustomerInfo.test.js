import { render, screen } from "@testing-library/react";
import CustomerInfo from "./CustomerInfo";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Customer Info screen", () => {
  it('Customer Info"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CustomerInfo />
      </Provider>
    );

    expect(getByRole("custInfoView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

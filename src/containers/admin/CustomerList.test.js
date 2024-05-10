import { render, screen } from "@testing-library/react";
import CustomerList from "./CustomerList";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Customer List screen", () => {
  it("Customer List", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CustomerList />
      </Provider>
    );

    expect(getByRole("custListView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

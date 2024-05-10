import { render } from "@testing-library/react";
import TransactionHistory from "./TransactionHistory";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Transaction History screen", () => {
  it("Transaction History", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <TransactionHistory />
      </Provider>
    );

    expect(getByRole("tranHistoryRole")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

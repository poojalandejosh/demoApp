import { render } from "@testing-library/react";
import TransactionRecord from "./TransactionRecord";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Transaction Record screen", () => {
  it("Transaction Record", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <TransactionRecord />
      </Provider>
    );

    expect(getByRole("transactionView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

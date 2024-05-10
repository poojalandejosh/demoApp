import { render, screen } from "@testing-library/react";
import CreateTransaction from "./CreateTransaction";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Create transaction screen", () => {
  it("Create Transaction", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CreateTransaction />
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

import { render } from "@testing-library/react";
import TransactionCard from "./TransactionCard";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";

describe("renders Loading component ", () => {
  it("Loading component", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TransactionCard />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("tranCardView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

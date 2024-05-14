import { render, screen } from "@testing-library/react";
import CustomerInfo from "./CustomerInfo";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";

describe("renders Create user screen", () => {
  it('create user"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomerInfo />
        </MemoryRouter>
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

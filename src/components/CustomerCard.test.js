import { render } from "@testing-library/react";
import CustomerCard from "./CustomerCard";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";
describe("renders Button component ", () => {
  it("Button component", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomerCard />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("cardView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

import { render } from "@testing-library/react";
import DataNotFoundComponent from "./DataNotFoundComponent";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";
describe("renders Button component ", () => {
  it("Button component", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <DataNotFoundComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("dataNotFoundView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

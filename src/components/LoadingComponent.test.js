import { render } from "@testing-library/react";
import LoadingComponent from "./LoadingComponent";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";

describe("renders Loading component ", () => {
  it("Loading component", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoadingComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("loadingView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

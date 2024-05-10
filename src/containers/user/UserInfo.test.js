import { render } from "@testing-library/react";
import UserInfo from "./UserInfo";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";

describe("renders UserInfo screen", () => {
  it("UserInfo", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <UserInfo />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("userInfoView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

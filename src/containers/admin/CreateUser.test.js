import { render, screen } from "@testing-library/react";
import CreateUser from "./CreateUser";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Create user screen", () => {
  it('create user"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CreateUser />
      </Provider>
    );

    expect(getByRole("rootView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

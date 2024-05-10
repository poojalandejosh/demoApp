import { render, screen } from "@testing-library/react";
import AdminLogin from "./AdminLogin";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Admin Login screen", () => {
  it('admin login"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <AdminLogin />
      </Provider>
    );

    expect(getByRole("adminRoot")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

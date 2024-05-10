import { render, screen } from "@testing-library/react";
import HorizontalNav from "./HorizontalNav";
import { Provider } from "react-redux";
import { store } from "../reduxStore/Store";
import { MemoryRouter } from "react-router-dom";
import { LoginNav } from "./HorizontalNav";
import { AdminNav } from "./HorizontalNav";
import { CustomerNav } from "./HorizontalNav";

describe("renders Horizontal Nav screen", () => {
  it("Horizontal Nav", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <HorizontalNav />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("mainNavView")).not.toBeNull();
  });
});

describe("renders Login Nav screen", () => {
  it("Login Nav", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginNav />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("loginNav")).not.toBeNull();
  });
});

describe("renders Admin Nav screen", () => {
  it("Admin Nav", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AdminNav />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("adminNavView")).not.toBeNull();
  });
});

describe("renders Customer Nav screen", () => {
  it("Customer Nav", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomerNav />
        </MemoryRouter>
      </Provider>
    );

    expect(getByRole("custNavView")).not.toBeNull();
  });
});

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

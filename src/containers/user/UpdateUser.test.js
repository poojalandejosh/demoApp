import { render } from "@testing-library/react";
import UpdateUser from "./UpdateUser";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Update User screen", () => {
  it("Update User", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <UpdateUser />
      </Provider>
    );

    expect(getByRole("updateDataView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

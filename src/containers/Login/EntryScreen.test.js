import { render, screen } from "@testing-library/react";
import EntryScreen from "./EntryScreen";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/Store";

describe("renders Entry screen", () => {
  it('Entry screen"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <EntryScreen />
      </Provider>
    );

    expect(getByRole("entryView")).not.toBeNull();
  });
});
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

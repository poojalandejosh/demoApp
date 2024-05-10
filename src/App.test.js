import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./reduxStore/Store";

describe("With React Testing Library", () => {
  it('Shows "Hello world!"', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByRole("appRoot")).not.toBeNull();
  });
});

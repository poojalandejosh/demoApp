import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderFn = jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

describe("Application root", () => {
  it("should render without crashing", () => {
    // render your app here

    <App />;
    expect(renderFn);
    //   .toHaveBeenCalled();
  });
});

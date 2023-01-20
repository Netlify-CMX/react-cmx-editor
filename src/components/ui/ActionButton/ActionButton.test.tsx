import React from "react";
import { render } from "@testing-library/react";

import ActionButton from "./ActionButton";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<ActionButton label="Hello world!" />);
  });
});
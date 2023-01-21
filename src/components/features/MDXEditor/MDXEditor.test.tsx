import React from "react";
import { render } from "@testing-library/react";

import MDXEditor from "./MDXEditor";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<MDXEditor text="Hello world!" />);
  });
});
import React from "react";
import "./ActionButton.css";

export interface ButtonProps {
  label: string;
  children : React.ReactNode;
}

const ActionButton = (props: ButtonProps) => {
  const { children, label } = props;
  return (
    <button {...props} title={label} className="mdx-action-btn">
      {children}
    </button>
  );
};

export default ActionButton;

import React from "react";
import "./MenuBarSection.css";

export interface MenuSectionProps {
  children: JSX.Element | JSX.Element[];
}

export default function MenuSection({ children }: MenuSectionProps) {
  return (
    <ul className="mdx-menu-section">
      {Array.isArray(children) ? (
        children.map((item, i) => (
          <li key={i} className="mdx-menu-section__item">{item}</li>
        ))
      ) : (
        <li className="mdx-menu-section__item">{children}</li>
      )}
    </ul>
  );
}

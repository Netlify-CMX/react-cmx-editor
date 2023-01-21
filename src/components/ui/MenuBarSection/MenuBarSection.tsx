import React from "react";
import "./MenuBarSection.css";

export interface MenuSectionProps {
  children: JSX.Element | JSX.Element[];
  name: string;
}

export default function MenuSection({ children, name }: MenuSectionProps) {
  return (
    <ul className="mdx-menu-section" title={name}>
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

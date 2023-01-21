import React, { Children } from "react";

export interface MenuBarProps{
  children: React.ReactNode;
}

export default function MenuBar({ children } : MenuBarProps) {
  return (
    <nav className="mdx-menu-bar">
      {children}
    </nav>
  );
}

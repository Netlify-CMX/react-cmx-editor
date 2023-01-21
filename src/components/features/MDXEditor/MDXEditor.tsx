import React from "react";
import "./MDXEditor.css";

import { MenuBar } from "../../ui/MenuBar";
import MenuSection from "../../ui/MenuBarSection/MenuBarSection";
import ActionButton from "../../ui/ActionButton";

import BoldIcon from "../../icons/BoldIcon";
import UndoIcon from "../../icons/UndoIcon";
import RedoIcon from "../../icons/RedoIcon";

export interface MDXEditorProps {
  text: string;
}

const MDXEditor = (props: MDXEditorProps) => {
  return (
    <div className="mdx-editor">
      <MenuBar>
        <MenuSection>
          <ActionButton label="Undo">
            <UndoIcon></UndoIcon>
          </ActionButton>
          <ActionButton label="Red">
            <RedoIcon></RedoIcon>
          </ActionButton>
        </MenuSection>
      </MenuBar>
    </div>
  );
};

export default MDXEditor;

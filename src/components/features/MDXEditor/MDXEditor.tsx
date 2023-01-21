import React from "react";
import "./MDXEditor.css";

import { MenuBar } from "../../ui/MenuBar";
import MenuBarSection from "../../ui/MenuBarSection/MenuBarSection";
import ActionButton from "../../ui/ActionButton";
import TextEditor from "../../ui/TextEditor";

import BoldIcon from "../../icons/BoldIcon";
import UndoIcon from "../../icons/UndoIcon";
import RedoIcon from "../../icons/RedoIcon";
import ItalicIcon from "../../icons/ItalicIcon";
import UnderlineIcon from "../../icons/UnderlineIcon";
import TextclearIcon from "../../icons/TextclearIcon";
import StrikeIcon from "../../icons/StrikeIcon";
import CodeIcon from "../../icons/CodeIcon";
import ListBulletedIcon from "../../icons/ListBulletedIcon";
import ListNumberedIcon from "../../icons/ListNumberedIcon";
import LinkIcon from "../../icons/LinkIcon";
import ImageIcon from "../../icons/ImageIcon";

export interface MDXEditorProps {
  text: string;
}

const MDXEditor = (props: MDXEditorProps) => {
  return (
    <div className="mdx-editor">
      <MenuBar>
        <MenuBarSection name="History Buttons">
          <ActionButton label="Undo">
            <UndoIcon />
          </ActionButton>
          <ActionButton label="Red">
            <RedoIcon />
          </ActionButton>
        </MenuBarSection>

        <MenuBarSection name="Text Format Buttons">
          <ActionButton label="Bold">
            <BoldIcon />
          </ActionButton>
          <ActionButton label="Italic">
            <ItalicIcon />
          </ActionButton>
          <ActionButton label="Underline">
            <UnderlineIcon />
          </ActionButton>
          <ActionButton label="Strike">
            <StrikeIcon />
          </ActionButton>
          <ActionButton label="Code">
            <CodeIcon />
          </ActionButton>
          <ActionButton label="Textclear">
            <TextclearIcon />
          </ActionButton>
        </MenuBarSection>

        <MenuBarSection name="List Buttons">
          <ActionButton label="Bullet List">
            <ListBulletedIcon />
          </ActionButton>
          <ActionButton label="Numbered List">
            <ListNumberedIcon />
          </ActionButton>
        </MenuBarSection>

        <MenuBarSection name="Content Buttons">
          <ActionButton label="Add Link">
            <LinkIcon />
          </ActionButton>
          <ActionButton label="Add Image">
            <ImageIcon />
          </ActionButton>
        </MenuBarSection>

      </MenuBar>
      <TextEditor />

    </div>
  );
};

export default MDXEditor;

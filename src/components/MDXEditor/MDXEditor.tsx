import React from "react";
import "./MDXEditor.css";

export interface MDXEditorProps {
  text: string;
}

const MDXEditor = (props: MDXEditorProps) => {
  return (
  <>
    <textarea value={props.text}></textarea>
  </>
  )
};

export default MDXEditor;
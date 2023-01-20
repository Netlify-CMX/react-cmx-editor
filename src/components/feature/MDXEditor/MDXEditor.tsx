import React from "react";
import "./MDXEditor.css";

export interface MDXEditorProps {
  text: string;
}

const MDXEditor = (props: MDXEditorProps) => {
  return (
  <div className="mdx-editor">
    <div className="mdx-editor__menubar">

    </div>
    <textarea className="mdx-editor__textarea" value={props.text}></textarea>
  </div>
  )
};

export default MDXEditor;
import React from 'react'
import "./TextEditor.css"

export interface TextEditorProps{
  value?: string;
}

export default function TextEditor({ value }: TextEditorProps) {
  return (
    <div className='mdx-text-editor'>
      <pre contentEditable className='mdx-text-editor__pre'>{ value }</pre>
    </div>
  )
}

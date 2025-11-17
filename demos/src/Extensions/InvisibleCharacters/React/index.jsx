import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import HardBreak from '@patrick-baber-test/extension-hard-break'
import Heading from '@patrick-baber-test/extension-heading'
import InvisibleCharacters from '@patrick-baber-test/extension-invisible-characters'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Heading, Text, InvisibleCharacters, HardBreak],
    content: `
      <h1>
        This is a heading.
      </h1>
      <p>
        This<br>is<br>a<br>paragraph.
      </p>
      <p>
        This is a paragraph, but without breaks.
      </p>
    `,
  })

  if (!editor) {
    return false
  }

  return (
    <div>
      <div className="control-group">
        <div className="button-group">
          <button onClick={() => editor.commands.showInvisibleCharacters()}>Show invisible characters</button>
          {/* Works as well */}
          {/* <button onClick={() => editor.commands.showInvisibleCharacters(false)}>showInvisibleCharacters(false)</button> */}
          <button onClick={() => editor.commands.hideInvisibleCharacters()}>Hide invisible characters</button>
          <button onClick={() => editor.commands.toggleInvisibleCharacters()}>Toggle invisible characters</button>
        </div>
        <div>
          <input
            type="checkbox"
            id="show-invisible-characters"
            checked={editor.storage.invisibleCharacters.visibility()}
            onChange={event => {
              const value = event.currentTarget.checked

              editor.commands.showInvisibleCharacters(value)
            }}
          />
          <label htmlFor="show-invisible-characters">Show invisibles</label>
        </div>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}

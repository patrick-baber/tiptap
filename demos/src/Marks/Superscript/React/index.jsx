import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Superscript from '@patrick-baber-test/extension-superscript'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Superscript],
    content: `
        <p>This is regular text.</p>
        <p><sup>This is superscript.</sup></p>
        <p><span style="vertical-align: super">And this.</span></p>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={editor.isActive('superscript') ? 'is-active' : ''}
          >
            Toggle superscript
          </button>
          <button
            onClick={() => editor.chain().focus().setSuperscript().run()}
            disabled={editor.isActive('superscript')}
          >
            Set superscript
          </button>
          <button
            onClick={() => editor.chain().focus().unsetSuperscript().run()}
            disabled={!editor.isActive('superscript')}
          >
            Unset superscript
          </button>
        </div>
      </div>

      <EditorContent editor={editor} />
    </>
  )
}

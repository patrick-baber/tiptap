import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: `
        <p>The Text extension is required, at least if you want to have text in your text editor and that’s very likely.</p>
      `,
  })

  if (!editor) {
    return null
  }

  return <EditorContent editor={editor} />
}

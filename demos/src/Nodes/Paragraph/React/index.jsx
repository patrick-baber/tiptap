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
        <p>The Paragraph extension is not required, but it’s very likely you want to use it. It’s needed to write paragraphs of text. 🤓</p>
      `,
  })

  if (!editor) {
    return null
  }

  return <EditorContent editor={editor} />
}

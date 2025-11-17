import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import Image from '@patrick-baber-test/extension-image'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { Dropcursor } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Dropcursor],
    content: `
        <p>Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.</p>
        <img src="https://placehold.co/800x400" />
      `,
  })

  return <EditorContent editor={editor} />
}

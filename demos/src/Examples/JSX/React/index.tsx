import './styles.scss'

import { EditorContent, useEditor } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import React from 'react'

import { Paragraph } from './Paragraph.jsx'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false,
      }),
      Paragraph,
    ],
    content: `
    <p>
      Each paragraph will be red
    </p>
    `,
  })

  return <EditorContent editor={editor} />
}

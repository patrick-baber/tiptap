import './styles.scss'

import UniqueID from '@patrick-baber-test/extension-unique-id'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      UniqueID.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
      <h1>
        This is a very unique heading.
      </h1>
      <p>
        This is a unique paragraph. It’s so unique, it even has an ID attached to it.
      </p>
      <p>
        And this one, too.
      </p>
    `,
  })

  return <EditorContent editor={editor} />
}

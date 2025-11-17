import './styles.scss'

import { Placeholder } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something …',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
    ],
  })

  return <EditorContent editor={editor} />
}

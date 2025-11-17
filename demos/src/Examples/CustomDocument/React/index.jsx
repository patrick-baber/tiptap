import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import { Placeholder } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import React from 'react'

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export default () => {
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?'
          }

          return 'Can you add some further context?'
        },
      }),
    ],
    content: `
      <h1>
        It’ll always have a heading …
      </h1>
      <p>
        … if you pass a custom document. That’s the beauty of having full control over the schema.
      </p>
    `,
  })

  return <EditorContent editor={editor} />
}

import './styles.scss'

import { TiptapTransformer } from '@hocuspocus/transformer'
import Collaboration from '@patrick-baber-test/extension-collaboration'
import Document from '@patrick-baber-test/extension-document'
import Heading from '@patrick-baber-test/extension-heading'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import UniqueID from '@patrick-baber-test/extension-unique-id'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

const doc = TiptapTransformer.toYdoc({
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 1 },
      content: [{ type: 'text', text: 'This is a predefined, collaborative ydoc' }],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: "Let's see how this works out." }],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'This should now generate unique IDs correctly' }],
    },
  ],
})

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Heading,
      Paragraph,
      Text,
      Collaboration.configure({
        document: doc,
      }),
      UniqueID.configure({
        types: ['heading', 'paragraph'],
        filterTransaction: () => true,
      }),
    ],
  })

  return <EditorContent editor={editor} />
}

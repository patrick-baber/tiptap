import { Collaboration } from '@patrick-baber-test/extension-collaboration'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import { StarterKit } from '@patrick-baber-test/starter-kit'
import React from 'react'
import * as Y from 'yjs'

import type { TNote } from './types.js'

export default ({ note }: { note: TNote }) => {
  const doc = new Y.Doc()

  const editor = useEditor({
    content: note.defaultContent,
    editorProps: {
      attributes: {
        class: 'textarea',
      },
    },
    extensions: [
      StarterKit.configure({
        history: false, // important because history will now be handled by Y.js
      }),
      Collaboration.configure({
        document: doc,
      }),
    ],
  })

  return (
    // @ts-ignore
    <EditorContent editor={editor} />
  )
}

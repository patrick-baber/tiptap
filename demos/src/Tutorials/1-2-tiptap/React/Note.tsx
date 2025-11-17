import { EditorContent, useEditor } from '@patrick-baber-test/react'
import { StarterKit } from '@patrick-baber-test/starter-kit'
import React, { useState } from 'react'

import type { TNote } from './types.js'

export default ({ note }: { note: TNote }) => {
  const [modelValue, setModelValue] = useState(note.content)

  const editor = useEditor({
    content: modelValue,
    editorProps: {
      attributes: {
        class: 'textarea',
      },
    },
    onUpdate() {
      setModelValue(editor?.getText() ?? '')
    },
    extensions: [StarterKit],
  })

  return (
    // @ts-ignore
    <EditorContent editor={editor} />
  )
}

import './styles.scss'

import Image from '@patrick-baber-test/extension-image'
import { TableKit } from '@patrick-baber-test/extension-table'
import { Markdown } from '@patrick-baber-test/markdown'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import { useState } from 'react'

export default () => {
  const [serializedContent, setSerializedContent] = useState('')
  const editor = useEditor({
    extensions: [Markdown, StarterKit, Image, TableKit],
    content: `
      <p>In this demo, you can serialize Tiptap content into Markdown on the client-side via <code>@tiptap/markdown</code>.</p>
      <p>Feel free to edit this document to see the live-changes.</p>
    `,
    onUpdate: ({ editor: currentEditor }) => {
      setSerializedContent(currentEditor.getMarkdown())
    },
    onCreate: ({ editor: currentEditor }) => {
      setSerializedContent(currentEditor.getMarkdown())
    },
  })

  return (
    <>
      <div className="grid">
        <EditorContent className="editor-wrapper" editor={editor} />
        <div className="preview">
          <pre>{serializedContent}</pre>
        </div>
      </div>
    </>
  )
}

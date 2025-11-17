import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import HardBreak from '@patrick-baber-test/extension-hard-break'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, HardBreak],
    content: `
        <p>
          This<br>
          is<br>
          a<br>
          single<br>
          paragraph<br>
          with<br>
          line<br>
          breaks.
        </p>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>Set hard break</button>
        </div>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

import './styles.scss'

import Code from '@patrick-baber-test/extension-code'
import CodeBlock from '@patrick-baber-test/extension-code-block'
import Document from '@patrick-baber-test/extension-document'
import { BulletList, ListItem } from '@patrick-baber-test/extension-list'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { TrailingNode } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, TrailingNode, Code, BulletList, ListItem, CodeBlock],
    content: `
        <p>A paragraph</p>
        <pre><code>There should be a paragraph right after this one, because it is a code-block</code></pre>
      `,
  })

  return <EditorContent editor={editor} />
}

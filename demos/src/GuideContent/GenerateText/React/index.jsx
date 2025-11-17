import { generateText } from '@patrick-baber-test/core'
import Document from '@patrick-baber-test/extension-document'
import HardBreak from '@patrick-baber-test/extension-hard-break'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import React, { useMemo } from 'react'

const json = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'This is a paragraph.',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Here is another paragraph …',
        },
        {
          type: 'hardBreak',
        },
        {
          type: 'text',
          text: '… with an hard break.',
        },
      ],
    },
  ],
}

export default () => {
  const output = useMemo(() => {
    return generateText(
      json,
      [
        Document,
        Paragraph,
        Text,
        HardBreak,
        // other extensions …
      ],
      {
        // define a custom block separator if you want to
        blockSeparator: '\n\n',
      },
    )
  }, [])

  return (
    <pre>
      <code>{output}</code>
    </pre>
  )
}

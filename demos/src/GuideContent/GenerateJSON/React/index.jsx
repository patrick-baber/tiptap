import Bold from '@patrick-baber-test/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateJSON } from '@patrick-baber-test/core'
import Document from '@patrick-baber-test/extension-document'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
// Option 1: Browser + server-side
import { generateJSON } from '@patrick-baber-test/html'
import React, { useMemo } from 'react'

const html = '<p>Example <strong>Text</strong></p>'

export default () => {
  const output = useMemo(() => {
    return generateJSON(html, [
      Document,
      Paragraph,
      Text,
      Bold,
      // other extensions …
    ])
  }, [])

  return (
    <pre>
      <code>{JSON.stringify(output, null, 2)}</code>
    </pre>
  )
}

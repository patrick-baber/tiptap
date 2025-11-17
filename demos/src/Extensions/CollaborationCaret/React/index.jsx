import './styles.scss'

import Collaboration from '@patrick-baber-test/extension-collaboration'
import CollaborationCaret from '@patrick-baber-test/extension-collaboration-caret'
import Document from '@patrick-baber-test/extension-document'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { Placeholder } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const ydoc = new Y.Doc()
const provider = new WebrtcProvider('tiptap-collaboration-caret-extension', ydoc)

function Component() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCaret.configure({
        provider,
        user: {
          name: 'Cyndi Lauper',
          color: '#f783ac',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write something … It’ll be shared with everyone else looking at this example.',
      }),
    ],
  })

  return <EditorContent editor={editor} />
}

function App() {
  const useStrictMode = true

  return useStrictMode ? (
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  ) : (
    <Component />
  )
}

export default App

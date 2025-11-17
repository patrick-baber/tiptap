import './styles.scss'

import Bold from '@patrick-baber-test/extension-bold'
import Collaboration from '@patrick-baber-test/extension-collaboration'
import Document from '@patrick-baber-test/extension-document'
import Heading from '@patrick-baber-test/extension-heading'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { Placeholder } from '@patrick-baber-test/extensions'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import { BubbleMenu, FloatingMenu } from '@patrick-baber-test/react/menus'
import React from 'react'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const ydoc = new Y.Doc()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading,
      Bold,
      Collaboration.configure({
        document: ydoc,
      }),
      Placeholder.configure({
        placeholder: 'Write something … It’ll be shared with everyone else looking at this example.',
      }),
    ],
  })

  return (
    <>
      {editor && (
        <>
          <BubbleMenu editor={editor}>
            <div className="bubble-menu">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                Bold
              </button>
            </div>
          </BubbleMenu>
          <FloatingMenu editor={editor}>
            <div className="floating-menu">
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
              >
                H1
              </button>
            </div>
          </FloatingMenu>
        </>
      )}
      <EditorContent editor={editor} />
    </>
  )
}

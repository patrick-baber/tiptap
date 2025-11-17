import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import FileHandler from '@patrick-baber-test/extension-file-handler'
import Heading from '@patrick-baber-test/extension-heading'
import Image from '@patrick-baber-test/extension-image'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Heading,
      Paragraph,
      Text,
      Image,
      FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
          files.forEach(file => {
            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: 'image',
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run()
            }
          })
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach(file => {
            if (htmlContent) {
              // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
              // you could extract the pasted file from this url string and upload it to a server for example
              console.log(htmlContent) // eslint-disable-line no-console
              return false
            }

            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
                  type: 'image',
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run()
            }
          })
        },
      }),
    ],
    content: `
      <h1>
        Try to paste or drop files into this editor
      </h1>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    `,
  })

  return <EditorContent editor={editor} />
}

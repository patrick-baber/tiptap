import './styles.scss'

import Mentions from '@patrick-baber-test/extension-mention'
import { Color, TextStyle } from '@patrick-baber-test/extension-text-style'
import { EditorProvider } from '@patrick-baber-test/react'
import StarterKit from '@patrick-baber-test/starter-kit'
import React from 'react'

const extensions = [Color, TextStyle, StarterKit, Mentions]

const content = ''

export default () => {
  return <EditorProvider extensions={extensions} content={content}></EditorProvider>
}

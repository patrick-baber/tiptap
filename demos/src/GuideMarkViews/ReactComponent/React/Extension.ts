import { Mark } from '@patrick-baber-test/core'
import { ReactMarkViewRenderer } from '@patrick-baber-test/react'

import Component from './Component.js'

export default Mark.create({
  name: 'reactComponent',

  addAttributes() {
    return {
      'data-count': { default: 0 },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'react-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', HTMLAttributes]
  },

  addMarkView() {
    return ReactMarkViewRenderer(Component)
  },
})

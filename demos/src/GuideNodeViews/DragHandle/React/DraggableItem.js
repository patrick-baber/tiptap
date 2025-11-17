import { mergeAttributes, Node } from '@patrick-baber-test/core'
import { ReactNodeViewRenderer } from '@patrick-baber-test/react'

import Component from './Component.jsx'

export default Node.create({
  name: 'draggableItem',

  group: 'block',

  content: 'block+',

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="draggable-item"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-item' }), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})

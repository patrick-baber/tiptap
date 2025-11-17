import { NodeViewContent, NodeViewWrapper } from '@patrick-baber-test/react'
import React from 'react'

export default () => {
  return (
    <NodeViewWrapper className="react-component">
      <label contentEditable={false}>React Component</label>

      <NodeViewContent className="content is-editable" />
    </NodeViewWrapper>
  )
}

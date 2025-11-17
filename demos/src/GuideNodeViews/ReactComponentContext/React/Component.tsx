import type { ReactNodeViewProps } from '@patrick-baber-test/react'
import { NodeViewWrapper } from '@patrick-baber-test/react'
import React, { useContext } from 'react'

import { Context } from './Context.js'

export default (props: ReactNodeViewProps) => {
  const { value } = useContext(Context)

  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    })
  }

  return (
    <NodeViewWrapper className="react-component">
      <label>React Component: {value}</label>

      <div className="content">
        <button onClick={increase}>This button has been clicked {props.node.attrs.count} times.</button>
      </div>
    </NodeViewWrapper>
  )
}

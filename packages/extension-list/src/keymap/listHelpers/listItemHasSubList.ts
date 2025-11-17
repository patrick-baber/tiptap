import { getNodeType } from '@patrick-baber-test/core'
import type { Node } from '@patrick-baber-test/pm/model'
import type { EditorState } from '@patrick-baber-test/pm/state'

export const listItemHasSubList = (typeOrName: string, state: EditorState, node?: Node) => {
  if (!node) {
    return false
  }

  const nodeType = getNodeType(typeOrName, state.schema)

  let hasSubList = false

  node.descendants(child => {
    if (child.type === nodeType) {
      hasSubList = true
    }
  })

  return hasSubList
}

import { NodeSelection } from '@patrick-baber-test/pm/state'

export function isNodeSelection(value: unknown): value is NodeSelection {
  return value instanceof NodeSelection
}

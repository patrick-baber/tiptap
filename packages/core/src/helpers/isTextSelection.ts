import { TextSelection } from '@patrick-baber-test/pm/state'

export function isTextSelection(value: unknown): value is TextSelection {
  return value instanceof TextSelection
}

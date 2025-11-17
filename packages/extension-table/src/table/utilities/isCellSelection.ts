import { CellSelection } from '@patrick-baber-test/pm/tables'

export function isCellSelection(value: unknown): value is CellSelection {
  return value instanceof CellSelection
}

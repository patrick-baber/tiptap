import { selectNodeForward as originalSelectNodeForward } from '@patrick-baber-test/pm/commands'

import type { RawCommands } from '../types.js'

declare module '@patrick-baber-test/core' {
  interface Commands<ReturnType> {
    selectNodeForward: {
      /**
       * Select a node forward.
       * @example editor.commands.selectNodeForward()
       */
      selectNodeForward: () => ReturnType
    }
  }
}

export const selectNodeForward: RawCommands['selectNodeForward'] =
  () =>
  ({ state, dispatch }) => {
    return originalSelectNodeForward(state, dispatch)
  }

import { exitCode as originalExitCode } from '@patrick-baber-test/pm/commands'

import type { RawCommands } from '../types.js'

declare module '@patrick-baber-test/core' {
  interface Commands<ReturnType> {
    exitCode: {
      /**
       * Exit from a code block.
       * @example editor.commands.exitCode()
       */
      exitCode: () => ReturnType
    }
  }
}

export const exitCode: RawCommands['exitCode'] =
  () =>
  ({ state, dispatch }) => {
    return originalExitCode(state, dispatch)
  }

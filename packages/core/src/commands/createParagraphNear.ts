import { createParagraphNear as originalCreateParagraphNear } from '@patrick-baber-test/pm/commands'

import type { RawCommands } from '../types.js'

declare module '@patrick-baber-test/core' {
  interface Commands<ReturnType> {
    createParagraphNear: {
      /**
       * Create a paragraph nearby.
       * @example editor.commands.createParagraphNear()
       */
      createParagraphNear: () => ReturnType
    }
  }
}

export const createParagraphNear: RawCommands['createParagraphNear'] =
  () =>
  ({ state, dispatch }) => {
    return originalCreateParagraphNear(state, dispatch)
  }

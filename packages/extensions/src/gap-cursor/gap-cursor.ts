import type { ParentConfig } from '@patrick-baber-test/core'
import { callOrReturn, Extension, getExtensionField } from '@patrick-baber-test/core'
import { gapCursor } from '@patrick-baber-test/pm/gapcursor'

declare module '@patrick-baber-test/core' {
  interface NodeConfig<Options, Storage> {
    /**
     * A function to determine whether the gap cursor is allowed at the current position. Must return `true` or `false`.
     * @default null
     */
    allowGapCursor?:
      | boolean
      | null
      | ((this: {
          name: string
          options: Options
          storage: Storage
          parent: ParentConfig<NodeConfig<Options>>['allowGapCursor']
        }) => boolean | null)
  }
}

/**
 * This extension allows you to add a gap cursor to your editor.
 * A gap cursor is a cursor that appears when you click on a place
 * where no content is present, for example inbetween nodes.
 * @see https://tiptap.dev/api/extensions/gapcursor
 */
export const Gapcursor = Extension.create({
  name: 'gapCursor',

  addProseMirrorPlugins() {
    return [gapCursor()]
  },

  extendNodeSchema(extension) {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
    }

    return {
      allowGapCursor: callOrReturn(getExtensionField(extension, 'allowGapCursor', context)) ?? null,
    }
  },
})

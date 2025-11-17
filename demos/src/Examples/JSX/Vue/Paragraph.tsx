/** @jsxImportSource @tiptap/core */
import { mergeAttributes } from '@patrick-baber-test/core'
import { Paragraph as BaseParagraph } from '@patrick-baber-test/extension-paragraph'

export const Paragraph = BaseParagraph.extend({
  renderHTML({ HTMLAttributes }) {
    return (
      <p {...mergeAttributes(HTMLAttributes, { style: 'color: red' })}>
        <slot />
      </p>
    )
  },
})

import { Paragraph as BaseParagraph } from '@patrick-baber-test/extension-paragraph'
import { VueNodeViewRenderer } from '@patrick-baber-test/vue-3'

import Component from './Component.vue'

export default BaseParagraph.extend({
  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})

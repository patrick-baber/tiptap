<template>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@patrick-baber-test/extension-document'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import Typography from '@patrick-baber-test/extension-typography'
import { Editor, EditorContent } from '@patrick-baber-test/vue-3'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Typography.configure({
          rightArrow: '=====>',
        }),
      ],
      content: `
        <p>“I have been suffering from Typomania all my life, a sickness that is incurable but not lethal.”</p>
        <p>— Erik Spiekermann, December 2008</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

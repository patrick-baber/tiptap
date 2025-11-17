<template>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@patrick-baber-test/extension-document'
import Text from '@patrick-baber-test/extension-text'
import { Editor, EditorContent } from '@patrick-baber-test/vue-3'

import Paper from './Paper.js'

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
        Document.extend({
          content: 'paper',
        }),
        Text,
        Paper,
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

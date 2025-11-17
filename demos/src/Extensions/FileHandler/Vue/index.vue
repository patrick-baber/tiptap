<template>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@patrick-baber-test/extension-document'
import FileHandler from '@patrick-baber-test/extension-file-handler'
import Heading from '@patrick-baber-test/extension-heading'
import Image from '@patrick-baber-test/extension-image'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { Editor, EditorContent } from '@patrick-baber-test/vue-3'
import { defineComponent } from 'vue'

export default defineComponent({
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
        Heading,
        Paragraph,
        Text,
        Image,
        FileHandler.configure({
          allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
          onDrop: (currentEditor, files, pos) => {
            files.forEach(file => {
              const fileReader = new FileReader()

              fileReader.readAsDataURL(file)
              fileReader.onload = () => {
                currentEditor
                  .chain()
                  .insertContentAt(pos, {
                    type: 'image',
                    attrs: {
                      src: fileReader.result,
                    },
                  })
                  .focus()
                  .run()
              }
            })
          },
          onPaste: (currentEditor, files) => {
            files.forEach(file => {
              const fileReader = new FileReader()

              fileReader.readAsDataURL(file)
              fileReader.onload = () => {
                currentEditor
                  .chain()
                  .insertContentAt(currentEditor.state.selection.anchor, {
                    type: 'image',
                    attrs: {
                      src: fileReader.result,
                    },
                  })
                  .focus()
                  .run()
              }
            })
          },
        }),
      ],
      content: `
        <h1>
          Try to paste or drop files into this editor
        </h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
})
</script>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  img {
    display: block;
    height: auto;
    margin: 1.5rem 0;
    max-width: 100%;

    &.ProseMirror-selectednode {
      outline: 3px solid var(--purple);
    }
  }
}
</style>

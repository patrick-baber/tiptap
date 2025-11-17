import { Editor as CoreEditor } from '@patrick-baber-test/core'
import type Vue from 'vue'

export class Editor extends CoreEditor {
  public contentComponent: Vue | null = null
}

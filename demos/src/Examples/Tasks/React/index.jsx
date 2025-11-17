import './styles.scss'

import Document from '@patrick-baber-test/extension-document'
import { TaskItem, TaskList } from '@patrick-baber-test/extension-list'
import Paragraph from '@patrick-baber-test/extension-paragraph'
import Text from '@patrick-baber-test/extension-text'
import { EditorContent, useEditor } from '@patrick-baber-test/react'
import React from 'react'

const CustomDocument = Document.extend({
  content: 'taskList',
})

const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})

export default () => {
  const editor = useEditor({
    extensions: [CustomDocument, Paragraph, Text, TaskList, CustomTaskItem],
    content: `
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true">flour</li>
        <li data-type="taskItem" data-checked="true">baking powder</li>
        <li data-type="taskItem" data-checked="true">salt</li>
        <li data-type="taskItem" data-checked="false">sugar</li>
        <li data-type="taskItem" data-checked="false">milk</li>
        <li data-type="taskItem" data-checked="false">eggs</li>
        <li data-type="taskItem" data-checked="false">butter</li>
      </ul>
    `,
  })

  return <EditorContent editor={editor} />
}

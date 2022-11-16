/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useRef, useMemo, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { REDO_ICON, UNDO_ICON } from '../../constants/common/icons'
import { useStrings } from '../../hooks/useStrings'

const InsightEditor = (): JSX.Element => {
  const reactQuillRef = useRef<ReactQuill>(null)
  const [value, setValue] = useState('')
  const { characterCount, wordCount, handlers } = useStrings({
    initialState: value,
    handleHtmlTags: true,
  })

  useEffect(() => {
    const content =
      localStorage.getItem('insight_editor_content') ??
      '<p>Today I worked on the following features:</p><ol><li>Assessment page</li><li>Alert components</li></ol>'
    setValue(content)
    handlers.update(content)
  }, [handlers])

  // eslint-disable-next-line testing-library/no-debugging-utils
  Quill.debug('error')

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const icons = Quill.import('ui/icons')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  icons.undo = UNDO_ICON
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  icons.redo = REDO_ICON

  const handleChangeText = (content: string): void => {
    setValue(content)
    handlers.update(content)
    localStorage.setItem('insight_editor_content', content)
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ color: [] }, { background: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ script: 'sub' }, { script: 'super' }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { align: [] },
            { indent: '+1' },
          ],
          ['blockquote', 'code-block'],
          ['link'],
          ['undo', 'redo', 'clean'],
        ],
        handlers: {
          undo: () => {
            reactQuillRef?.current?.getEditor()?.getModule('history')?.undo()
          },
          redo: () => {
            reactQuillRef?.current?.getEditor()?.getModule('history')?.redo()
          },
        },
      },
      clipboard: {
        matchVisual: false,
      },
      history: {
        delay: 1000,
        maxStack: 100,
        userOnly: true,
      },
    }),
    [],
  )

  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
    'background',
  ]

  return (
    <>
      <ReactQuill
        placeholder="Please enter your monthly progress report..."
        ref={reactQuillRef}
        theme="snow"
        value={value}
        onChange={handleChangeText}
        modules={modules}
        formats={formats}
      />
      <div className="mt-4 flex">
        <span className="text-sm text-gray-500">
          Character count: {characterCount}
        </span>
        <span className="ml-2 text-sm text-gray-500">
          Word count: {wordCount}
        </span>
      </div>
    </>
  )
}

export default InsightEditor

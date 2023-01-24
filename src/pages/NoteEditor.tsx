import BackButton from "../components/BackButton";
import data from '../locals/note-data.json'
import { useState } from "react";

const time = (): string => {
  const date = new Date();
  const min = date.getMinutes();
  if (min < 10) {
    return date.getHours() + ":0" + min;
  }
  return date.getHours() + ":" + min;
}

const update = (id: number) => {
  data[id].heading = "heading"
  data[id].note = 'note'
  data[id].time = time()
}

const NoteEditor = (id: number) => {
  const [text, setText] = useState('')
  return (
    <>
      <BackButton />
      <div className="flex flex-col">
        <input type="text"
          className='w-[400px] outline-none bg-blue-300 text-lg m-2 p-2 rounded'
          onKeyDown={() => update(id)}
          value={text}
        />
        <textarea
          className='bg-blue-200 w-[400px] resize-none outline-none text-xl m-2 p-2 rounded'
          onKeyDown={() => update(id)}
          rows={8}
        ></textarea>
      </div>
    </>
  )
}

export default NoteEditor

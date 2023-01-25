import React from 'react'
import deleteImage from '../locals/icon_remove.png'
import jsonData from '../locals/note-data.json'

interface BoxData {
    heading: string,
    time: string,
    note: string
}

const deleteCard = () => {

}

const NoteCard = (props: BoxData) => {
  return (
    <div className='grid grid-cols-3 select-none m-2 p-2 bg-blue-400 hover:bg-blue-500 rounded-md hover:scale-[1.01] cursor-pointer transition shadow-sm hover:shadow-lg shadow-slate-300'>
      <div className=''>{props.heading}</div>
      <img
        src={deleteImage}
        className='aspect-square w-5 opacity-100' />
      <div className=''>{props.time}</div>
      <div className='grid col-start-1 col-end-4'>{props.note}</div>
    </div>
  )
}

export default NoteCard
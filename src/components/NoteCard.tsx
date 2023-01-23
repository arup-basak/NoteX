import React from 'react'

interface BoxData {
    heading: string,
    time: string,
    note: string,
    id: number
}

const NoteCard = (props: BoxData) => {
  return (
    <div className='grid grid-cols-2 select-none m-2 p-2 bg-red-400 rounded-md hover:scale-[1.01] cursor-pointer transition'>
          <div className=''>{props.heading}</div>
          <div className=''>{props.time}</div>
          <div className='grid col-start-1 col-end-3'>{props.note}</div>
    </div>
  )
}

export default NoteCard
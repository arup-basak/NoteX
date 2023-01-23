import React from 'react';
import NoteCard from './components/NoteCard';

const data = [
    {
      "heading": "This is Heading",
      "time": "19:38",
      "note": "This is Note"
    },
    {
      "heading": "This is Heading2",
      "time": "19:48",
      "note": "This is Note2"
    },
    {
      "heading": "This is Heading3",
      "time": "19:18",
      "note": "This is Note3"
    }
  ]

function App() {
  return (
    <div className='min-w-[600px]'>
      {data.map(function (res, i) {
        return <NoteCard heading={res.heading} time={res.time} note={res.note} id={i} />;
      })}
    </div>
  );
}

export default App;

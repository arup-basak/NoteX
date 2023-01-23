import React from 'react';
import NoteCard from './components/NoteCard';
import data from './locals/note-data.json'


function App() {
  return (
    <div className='min-w-[600px]'>
      {data.map((res, i) => {
        return (<NoteCard
          id={i}
          heading={res.heading}
          time={res.time}
          note={res.note} />);
      })}
    </div>
  );
}

export default App;

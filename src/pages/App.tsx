import React from 'react';
import NoteCard from '../components/NoteCard';
import data from '../locals/note-data.json'
import AddButton from '../components/AddButton';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';

function App() {
  return (
    <div className='min-w-[600px]'>
      {data.map((res, i) => {
        return (<NoteCard
          // id={i}
          heading={res.heading}
          time={res.time}
          note={res.note} />);
      })}
      <AddButton />
    </div>
  );
}

export default App;

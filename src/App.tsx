import React from 'react';
import NoteCard from './components/NoteCard';

function App() {
  return (
    <div className='min-w-[600px]'>
      <NoteCard heading="This is Heading" time="f" note="This is Note" />
      <NoteCard heading="This is Heading" time="f" note="This is Note"/>
      <NoteCard heading="This is Heading" time="f" note="This is Note"/>
      <NoteCard heading="This is Heading" time="f" note="This is Note"/>
    </div>
  );
}

export default App;

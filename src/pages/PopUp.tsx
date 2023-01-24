import React from 'react'
import NoteCard from '../components/NoteCard';
import NoteEditor from './NoteEditor';
import data from '../locals/note-data.json'
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
} from 'react-chrome-extension-router';

const PopUp = () => {
    if (data.length == 0) {
        return <div>No Data</div>
    }
    return (
        <div className='min-w-[400px]'>
            {data.map((res, i) => {
                return (
                    <Link component={() => NoteEditor(i)}>
                        <NoteCard
                            heading={res.heading}
                            time={res.time}
                            note={res.note} />
                    </Link>)
            })}
        </div>
    );
};

export default PopUp
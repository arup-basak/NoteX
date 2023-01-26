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

const AddButton = () => {
    return (
        <Link component={() => NoteEditor(data.length)}>
            <div
                className='font-2xl m-2 p-2 bg-red-400 hover:bg-red-500 transition hover:scale-[1.3] w-fit rounded-full'>
                &#43;
            </div>
            <div className='hidden hover:block transition'>
                Add Notes
            </div>
        </Link>
    )
}

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
                            id={i}
                            heading={res.heading}
                            time={res.time}
                            note={res.note}
                        />
                    </Link>)
            })}
            <AddButton />
        </div>
    );
};

export default PopUp
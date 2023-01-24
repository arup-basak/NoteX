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
    return (
        <div>
            {data.map((res, i) => {
                return (
                    <Link component={NoteEditor} props={{ message: i }}>
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
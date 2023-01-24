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

const time = ():string => {
    const date = new Date();
    const min = date.getMinutes();
    if (min < 10) {
        return date.getHours() + ":0" + min;
    }
    return date.getHours() + ":" + min;
}

const update = (id: number, heading: string, note: string): void => {
    data[id].heading = heading
    data[id].note = note
    data[id].time = time()
}

const PopUp = () => {
    if (data.length == 0) {
        return <div>No Data</div>
    }
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
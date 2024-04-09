import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NoteComponent from './NoteComponent';

const Note = () => {
    const [note, setNote] = useState();
    const [loading, setLoading] = useState(true);
    const param = useParams();
    useEffect(() => {
        console.log(param);
        axios.get(`http://localhost:4000/notes/${param.id}`)
            .then((res) => {
                setNote(res.data.note)
                console.log(note)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                loading ? <div>Loading...</div> :
                    <NoteComponent note={note} />
            }
        </>
    )
}

export default Note
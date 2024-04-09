import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Note from './Note';
import NoteComponent from './NoteComponent';

const Body = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:4000/notes")
            .then((res) => {
                setNotes(res.data.notes)
                console.log(res);
                console.log(res.data.notes);
                setLoading(false);
            })
    }, [])


    return (
        <>
            {loading ? <div className='text-2xl flex justify-center items-center h-screen'><span className=' border-4 border-blue-500 rounded-full text-white px-3'>.</span></div> :
                <div className='p-4'>
                    <h2 className='text-xl font-bold'>Notes</h2>
                    {
                        notes.map((note, index) => (
                            <div key={index} className='border-2 rounded-lg border-blue-950 p-2'>
                                <NoteComponent note={note} />
                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Body
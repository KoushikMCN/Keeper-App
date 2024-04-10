import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditNote = () => {
    const params = useParams()
    const [note, setNote] = useState({})
    const [changed, setChanged] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:4000/notes/' + params.id)
            .then(response => {
                setNote(response.data.note)
            })
    }, [])

    useEffect(()=>{
        console.log(note)
    }, [note])

    const handleSave = async () => {
        console.log("Arrived")
        const res = await axios.patch('http://localhost:4000/note/edit/'+params.id, note)
        console.log(res.data);
    }


    return (
        <div>
            EDIT NOTE
            <div className='p-3 m-3 flex flex-col'>
                <input type='text' className='font-bold'
                    value={note.title} onInput={e => setNote({ ...note, title: e.target.value })}
                />
                <textarea role='textbox' className='w-5/6 min-h-5 max-h-full' value={note.content}
                    onChange={(e) => {
                        setNote({ ...note, content: e.target.value });
                        setChanged(true)
                    }}>
                </textarea>
                <p>{note.updatedAt}</p>
            </div>
            {
                changed &&
                <button className='border-2 p-4 border-slate-700' onClick={() => handleSave()}>
                    SAVE
                </button>
            }
        </div>
    )
}

export default EditNote
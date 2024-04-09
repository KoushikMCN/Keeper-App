import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NoteComponent = (props) => {
    const [note, setNote] = useState()
    const [loading, setLoading] = useState(true)
    const [changes, setChanges] = useState({ title: '', content: '' })
    const [changed, setChanged] = useState()
    useEffect(() => {
        setNote(props.note);
        setChanges(props.note);
        console.log(props.note)
        setLoading(false)
    }, [props])

    useEffect(() => {
      console.log(changes)
    }, [changes])
    

    const deleteNote = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:4000/note/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                window.location.href = '/';
            })
    }

    return (
        <div>
            {!loading &&
                <div className='m-3'>
                    <h3 className='font-bold' contentEditable >{note.title}</h3>
                    <textarea role='textbox' contentEditable
                        className='w-5/6 min-h-5 max-h-full'
                        value={changes.content ||  note.content}
                        onChange={(e) => {
                            setChanges({ ...changes, content: e.target.value });
                            setChanged(true)
                        }}>
                        {note.content}
                        </textarea>
                    <p>{note.updatedAt}</p>
                    <div className='flex gap-4'>
                        <button onClick={() => deleteNote(note._id)} className='text-blue-500 underline'>
                            {/* <img src={('../../public/delete-icon.png')} alt='DELETE' className='size-4' /> */}
                            DELETE
                        </button>
                        <a href={`/note/${note._id}`}>
                            <img src={require('../assets/images/open-icon.webp')} alt='OPEN' className='size-4 relative top-1' />
                        </a>
                    </div>
                </div>
            }
            {
                changed &&
                <>
                    <button className='border-2 border-blue-800'>SAVE</button>
                </>
            }
        </div>
    )
}

export default NoteComponent
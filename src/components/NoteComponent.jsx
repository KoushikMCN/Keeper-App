import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NoteComponent = (props) => {
    const [note, setNote] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setNote(props.note);
        setLoading(false);
    }, [])

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
                        <h3 className='font-bold'>{note.title}</h3>
                        <div role='textbox'>{note.content}</div>
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
        </div>
    )
}

export default NoteComponent
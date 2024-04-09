import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NoteComponent from './NoteComponent'

const EditNote = () => {
    const params = useParams()
    const [note, setNote] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/notes/' + params.id)
            .then(response => {
                setNote(response.data.note)
                console.log(response.data)
            })
    }, [])


    return (
        <div>
            <NoteComponent note={note} />
        </div>
    )
}

export default EditNote
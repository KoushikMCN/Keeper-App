import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'

const AddNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSave = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/newnote', { title, content })
        console.log(res)
        window.location.href =  '/';
    }
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center '>
                <h1>Add a Note</h1>
                <form className='flex flex-col justify-center items-center border-2 border-slate-700 rounded-lg w-9/12 lg:w-7/12 m-4 p-4'>
                    <input type='text' placeholder="Title" id='title' name='title' className='border-white text-center text-xl' value={title} onChange={(e)=>setTitle(e.target.value)} /><br/>
                    <textarea  
                        rows={5} className='w-9/12'
                        placeholder="Enter your note here..." 
                        name='content' 
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                    ></textarea><br/><br/>
                    <button onClick={(e)=>handleSave(e)} className='border-2 border-slate-500 rounded-lg p-2' >Save</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
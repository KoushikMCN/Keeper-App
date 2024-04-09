import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Add from '../components/Add'

const Home = () => {
    return (
        <>
            <Header />
            <Body />
            <div className='fixed bottom-2 right-2'>
                <Add />
            </div>
        </>
    )
}

export default Home
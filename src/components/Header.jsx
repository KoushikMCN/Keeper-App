import React from 'react'

const Header = () => {

  const toggleDisplay = () => {
    document.getElementById('menu').classList.toggle('hidden')
    document.getElementById('menu').classList.toggle('inline-block')
  }

  return (
    <nav className='relative'>
      <div className='sticky top-0 flex justify-between p-4 border-b-2 border-blue-800/50 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-600 font-ubuntu '>Keeper.</h1>
        <button className='' onClick={toggleDisplay}>
          <span className='w-6 text-2xl text-slate-600 font-bold'>=</span>
        </button>
        <ul className='hidden w-44 bg-white border-2 border-blue-950 p-2 rounded-lg absolute top-12 right-4' id='menu'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
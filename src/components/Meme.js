import React from 'react'

const Meme = () => {
  return (
    <main>
      <form className='form'>
        <input className='form--input' type='text' placeholder='Top text' />
        <input className='form--input' type='text' placeholder='Bottom text' />
        <button className='form--button'>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default Meme

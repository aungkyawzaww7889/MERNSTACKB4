import React from 'react'

const Note = ({note}) => {
  return (
   <div>
    <div className='bg-sky-800 w-[450px] md:w-[500px] mt-3 rounded-lg'>
        <h3 className='p-3 text-sm text-white'>+ {note}</h3>
    </div>
   </div>
  )
}

export default Note

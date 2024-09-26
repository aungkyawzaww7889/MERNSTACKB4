import React,{useState} from 'react'

const AddNote = ({showNoteHandler}) => {

  const [note,setNote] = useState("");

  const addNote =async (e)=>{
    e.preventDefault();
    // console.log(note);

    try{
      await fetch("https://firenote-2a7bb-default-rtdb.firebaseio.com/notes.json",{
        method :"POST",
        body : JSON.stringify(note),
        header:{
          "Content-Type":"application/json"
        },
      });
      setNote("");
      
    }catch(err){
      alert(err);
    }

    // const resData = await response.json();
    // console.log(resData);

  }

  const inputvalue = (e)=>{
    setNote(e.target.value);
  }

  return (
    <>
    <form onSubmit={addNote} action="" method="" className='w-[450px] md:w-[500px] bg-sky-600 p-4'> 
      <div className='flex justify-between items-center mb-2'>
        <h1 className='text-2xl text-white font-bold mb-3'>Fire Note</h1>
        <button className='p-2 bg-white rounded-md hover:bg-slate-300' onClick={showNoteHandler}>Show Note</button> 
      </div>
      
        <div className='flex justify-between space-x-3'>
          <input type="text" className='w-full p-2 rounded-md outline-none'  onChange={inputvalue} value={note} placeholder='add note here' />
          <button type='submit' className='bg-white px-2 rounded-md text-sm flex-none hover:bg-white hover:text-sky-500'>Add Note</button>
        </div>
      </form>
    </>
  )
}

export default AddNote

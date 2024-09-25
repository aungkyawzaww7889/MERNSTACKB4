import React,{useState,useEffect} from 'react'
import AddNote from './components/AddNote'
import Note from './components/Note'

function App() {
  
  const [notes,setNotes]  = useState([]);

  // စစချင်းအလုပ်လုပ်
  // useEffect(()=>{
  //   showNoteHandler();
  // },[]);

  const showNoteHandler = async () =>{
    // console.log('hay');
    const response = await fetch("https://firenote-2a7bb-default-rtdb.firebaseio.com/notes.json");
    
    const notes = await response.json();
    // console.log(notes["-O7dSjqCRgHMYsMY1jA2"]); //got to eat

    const modifiedNote = [];
    for (const note in notes){
      // console.log(notes[note]);
        modifiedNote.push(notes[note]);
    }

    // console.log(modifiedNote);
    setNotes(modifiedNote);

  }

  return (
    <>
     <section className='p-4'>
      <AddNote showNoteHandler={showNoteHandler}/>

      {
        notes.map((note,idx)=>(
          <Note key={idx} note={note}/>
        ))
      }

     </section>
    </>
  )
}

export default App

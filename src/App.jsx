import { useEffect, useState } from 'react';
import './App.css'
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from './components/Child3';
import FirstContextProvider from "./firstContext";

function App(){

  const [ key,setKey ]  = useState('');

            // function , Dependency
  // useEffect(function(){},[])
  useEffect(()=>{
    console.log("hay");
  },[]);

  return (
  
    <section>

      <FirstContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </FirstContextProvider>

      <form action="" method="">
        <div className="form-group">
          <label htmlFor="">{key}</label>
          <input type="text" name='' id='' className='form-control' placeholder='Enter Name' onChange={(e)=>{setKey(e.target.value);}} />
        </div>
      </form>
      
    </section>

  )
}

export default App

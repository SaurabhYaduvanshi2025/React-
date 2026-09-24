

  import { useState } from 'react';
  import './App.css'

  function App() {

  
    let [counter,setCounter] = useState(15)
    
    
    const addValue = () =>{

      if(counter<20){
        setCounter(counter+1)
      }
      console.log("clicked", counter);
    }


    const removeValue = () =>{
      if(counter > 0){

        setCounter(counter - 1)

      }

    }


    return (
    <>

      <h1>This is React</h1>
      <h2>Counter the Value:{counter}</h2>


      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
    )
  }

  export default App

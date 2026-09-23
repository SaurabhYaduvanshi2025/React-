

import { useState } from 'react'
import './App.css'

function App() {

   const [color,setcolor] = useState("Blue")

  return (
    <>
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
                
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2x3">

                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'blue'}}onClick={()=>setcolor("blue")}>Blue</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'red'}}onClick={()=>setcolor("red")}>red</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'black'}}onClick={()=>setcolor("black")}>Black</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'yellow'}}onClick={()=>setcolor("yellow")}>yellow</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'navy'}}onClick={()=>setcolor("navy")}>navy</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'pink'}}onClick={()=>setcolor("pink")}>pink</button>
                         <button className="outline-none px-5 py-3 text-white shadow-sm " style={{backgroundColor:'green'}}onClick={()=>setcolor("green")}>green</button>

                </div>

          </div>


        </div>
    </>
  )
}

export default App

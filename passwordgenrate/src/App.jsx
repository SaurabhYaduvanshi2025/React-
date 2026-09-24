import { useCallback, useState, useEffect } from 'react'


import './App.css'

function App() {

     const [length , setLength] = useState(8)
     const [number , setNumber] = useState(false)
     const [char , charAllo]    =  useState(false)
     const [password,setPassword] = useState("")

     const  passwordGenrator = useCallback(() => {

      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstuvwxyz"

      if(number) str += "0123456789"
      if (char) str += "!@#$%^&*()_+~`"

        for (let i = 1; i <= length; i++){
          let char = Math.floor(Math.random() * str.length + 1)
          
          pass += str.charAt(char)
        }

        setPassword(pass)

     },[length,number,char, setPassword])


     useEffect(()=>{
      passwordGenrator()
     },[length,number,char,passwordGenrator])



  return (
    <>

        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-300 bg-gray-500'>
          <h1 className='text-5xl text-center text-white'>Password Genrater</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>

            <input
             type="text"
             value={password}
             className="outline-none w-full py-1 px-3 bg-white text-black placeholder-black"
             placeholder='fill Your Password Here'
             readOnly
             
             />

             <button className="outline-none bg-blue-500 hover:bg-blue-700 font-medium transition-color cursor-pointer  text-white px-4 py-1 shrink-0">Copy</button>

          </div>

          <div className='flex items-center gap-x-2'>

            <div className='flex items-center gap-x-1'>

              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer '
              onChange={(e)=>{setLength(e.target.value)}}
              />

              <label className='text-black font-medium'>Length: {length}</label>

            </div>


          <div className='flex items-center gap-x-1'>

            <input type="checkbox"
            defaultChecked={setNumber}
            id='numberInput'
            onChange={() =>{
                setNumber((prev) => !prev)
            }}
            
            
            />

            <label className='text-black' htmlFor='numberInput'>Number</label>
             
            
          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox"
            defaultChecked={charAllo}
            id='charinput'
            onChange={() =>{
                setNumber((prev) => !prev)
            }}
            
            
            />

            <label className='text-black' htmlFor='numberInput'>Characters</label>
             
            
          </div>



          </div>

            
        </div>
    </>
  )
}

export default App

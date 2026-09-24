import { useCallback, useState } from 'react'


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
          
          pass = str.charAt(char)
        }

        setPassword(pass)

     },[length,number,char, setPassword])



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

            
        </div>
    </>
  )
}

export default App

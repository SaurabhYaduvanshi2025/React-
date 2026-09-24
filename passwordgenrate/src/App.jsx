import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-300 bg-gray-500'>
      <h1 className='text-3xl text-center text-white mb-4 font-bold'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black placeholder-black"
          placeholder='Your Password'
          readOnly
          ref={passwordRef}
        />

        <button 
          onClick={copyPasswordToClipboard} 
          className="outline-none bg-blue-500 hover:bg-blue-700 font-medium transition-colors cursor-pointer text-white px-4 py-1 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className='flex items-center gap-x-3 text-sm'>
        {/* Range Slider */}
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(Number(e.target.value)) }}
          />
          <label className='text-black font-medium'>Length: {length}</label>
        </div>

        {/* Numbers Checkbox */}
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label className='text-black cursor-pointer' htmlFor='numberInput'>Number</label>
        </div>

        {/* Special Characters Checkbox */}
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label className='text-black cursor-pointer' htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
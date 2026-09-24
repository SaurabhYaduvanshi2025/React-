import './App.css'
// import React from 'react'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
       
          <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Team Members</h1>

      {/* 2. Component ko alag-alag data ke sath call kiya */}
      <div className="flex flex-wrap">
        <ProfileCard 
          name="Aman Sharma" 
          role="Frontend Developer" 
          experience="2 Years" 
        />

        <ProfileCard 
          name="Rohit Verma" 
          role="UI/UX Designer" 
          experience="1 Year" 
        />

        <ProfileCard 
          name="Pooja Singh" 
          role="Backend Developer" 
          experience="3 Years" 
        />
        <ProfileCard
         name="Saurabh Yadav"
         role="Fullstack"
         experience="1 Years"
         />
      </div>
    </div>

    </>
  )
}

export default App

import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate=useNavigate()
  return (
    <div className=' h-[100vh] flex  flex-col justify-center items-center'>
      <div className=' h-[66vh] w-[54vw] flex flex-col gap-2 justify-center items-center border-2 border-solid border-gray-400 shadow-xl rounded-xl'>
          <img src="https://cdn.drlinkcheck.com/blog/404-not-found.png" alt="page not found" className=' h-[50vh]' />
        <Button variant="outlined" onClick={()=>{navigate('/')}}>Home</Button>
      </div>
    </div>
  )
}

export default PageNotFound
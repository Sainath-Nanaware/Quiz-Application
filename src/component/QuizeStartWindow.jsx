import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuizeStartWindow({hidePopup,totalQuations,title,desc}) {
    const navigate=useNavigate()
  return (
    <div className='ab absolute top-0 bottom-0 right-0 left-0 z-10'>
    <div className='h-[100vh] flex justify-center items-center backdrop-blur-md  '>
        <div className=' h-[70vh] w-[48vw] rounded-xl bg-gray-100 shadow-2xl '>
            <div className=' border-solid border-b-4 h-[20vh] flex  flex-col justify-center items-center '>
                <p className='font-bold text-[34px] text-[#FAA91C]'>{title}</p>
                <p className='w-[30vw] text-center '>{desc}</p>
            </div>
            <div className=' flex flex-col justify-center items-start gap-[20px] p-[40px]'>
                <p className='text-[18px] font-semibold'> &#10148; Number of questions:  {totalQuations}</p>
                <p className='text-[18px] font-semibold'> &#10148; Number of points each question:  2</p>
                <p className='text-[18px] font-semibold'> &#10148; Qize Duration:   00:00</p>
            </div>
            <div className='h-[10vh] flex justify-center items-center gap-[15vw]'>
                <Button variant="contained" color="error" onClick={()=>{navigate('/');hidePopup(false)}}>Cancel</Button>
                <Button variant="contained" color="success" onClick={()=>hidePopup(false)}>Start</Button>

            </div>


        </div>
    </div>
    </div>
  )
}

export default QuizeStartWindow

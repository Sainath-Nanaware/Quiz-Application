import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  dashboardImage from '../../public/images/quize-poster.jpg'


function Home() {
    const {quizes}=useSelector((state=>state.quiz)) 
    return (
      <>
    <div className=' flex flex-col justify-center items-center p-[10px] '>
      <img src={dashboardImage} alt="dashboard image"  className=' h-[60vh] pl-[70px] '/>
    </div>
    <div className=' flex justify-center p-[10px]'>
      <p className=' text-[42px] font-semibold '>"Every quiz is a step closer to brilliance"</p>
    </div>
    <div className=' min-h-screen bg-white px-32 py-16 grid grid-cols-4 gap-10' >
        {quizes.map((element)=>{
            return <Link key={element.quizId} 
                    to={`/quizPage/${element.quizId}`}
                    className='border-4 border-[#FAA91C] bg-[#FAA91C]  drop-shadow-xl rounded-[8px] h-[50vh] w-[18vw] flex flex-col  gap-2 justify-center items-center'>
                          <img src={element.image} alt="gk" className=' h-[30vh] w-[15vw] rounded-[8px]'/>
                          <p className='font-semibold text-[20px]'>{element.title}</p>
                          <p className='text-[#444645] text-center'>{element.description}</p>             
                  </Link>
        })}
    </div>
    </>
  )
}

export default Home

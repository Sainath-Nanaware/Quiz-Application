import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function QuizeResult() {
    const navigate=useNavigate()
    const {quizId}=useParams()
    const {quizes}=useSelector((state=>state.quiz))
    const [quiz]=quizes.filter((element)=>{
                return element.quizId===quizId
            })

    
    const {selectOptions}=useSelector((state=>state.selectOption));
    const totalPoint=quiz.questions.length*2
    let userPoints=0
    // console.log(quiz.questions)
    // console.log("option selected",selectOptions)
    // quiz.quations.forEach((quiz)=>{
    //         selectOptions.forEach((userOption)=>{
    //             if(quiz.questionId===userOption.questionId && quizes.correctAnswer )
        
    // });
    
  return (
    <div>
        {/* quize result Title */}
        <div className='h-[11vh] flex justify-center items-center bg-[#444645]'>
            <p className='text-[24px] font-semibold bg-[#FAA91C] p-[9px] px-[24px] rounded-md'>Quiz Result</p>
        </div>

      <div className='h-[88vh] flex justify-center items-center '>
        <div className='border-2 border-solid border-[#FAA91C]  rounded-xl h-[80vh] w-[40vw] flex  flex-col justify-start items-center gap-[60px] p-[50px]'>
            <p className='text-[40px]'>{quiz.title}</p>
            <div className='flex  gap-[24px]'>
                <div className='flex flex-col justify-center items-center border-2 border-solid border-green-500 w-[15vw] p-[20px] rounded-xl'>
                    <p className='text-[80px] font-semibold'>00</p>
                    <p className='text-[20px]  '>Your Points</p>
                </div>
                <div className='flex flex-col justify-center items-center border-2 border-solid border-[#c7490a] w-[15vw] p-[20px] rounded-xl'>
                    <p className='text-[80px] font-semibold'>{totalPoint}</p>
                     <p className='text-[20px] '>Total Points</p>
                </div>
            </div>
            <Button variant="outlined" onClick={()=>{navigate('/')}}>Home</Button>
        </div>
      </div>
    </div>
  )
}

export default QuizeResult
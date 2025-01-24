import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function QuizeResult() {
    const navigate=useNavigate()
    const {quizId}=useParams()
    const {quizes}=useSelector((state=>state.quiz))

    //get quize array according to quize ID
    const [quiz]=quizes.filter((element)=>{
                return element.quizId===quizId
            })
    //get user selected options array
    const {selectOptions}=useSelector((state=>state.selectOption));
    //each quation marks 
    const eachQuationMarks=2
    const totalPoint=quiz.questions.length*eachQuationMarks

    // console.log("quize quations:",quiz.questions)
    // console.log("option selected:",selectOptions)
    var correctQuations=[]
    //compare selected options and correct oprtion from quizeArray and user selected option array
    for(let i=0;i<quiz.questions.length;i++){
      selectOptions.filter((element)=>{
        if(element.quationId===quiz.questions[i].questionId && element.optionId===quiz.questions[i].correctAnswer){
          correctQuations.push(element)
        }else{
          return true;
        }
      })
      // console.log(quiz.questions[i].questionId)
    }
    //final result count according correct quation array length(correct quation count)
    let userMarks=correctQuations.length*eachQuationMarks
    // console.log("correct quation array",correctQuations)

    
    
  return (
    <div>
        {/* quize result Title */}
        <div className='h-[11vh] flex justify-center items-center bg-[#444645]'>
            <p className='text-[24px] font-semibold bg-[#FAA91C] p-[9px] px-[24px] rounded-md'>Quiz Result</p>
        </div>

      <div className='h-[88vh] flex justify-center items-center '>
        <div className='border-2 border-solid border-[#FAA91C]  shadow-xl rounded-xl h-[80vh] w-[40vw] flex  flex-col justify-start items-center gap-[60px] p-[50px]'>
            <p className='text-[40px] font-semibold border-b-2 border-solid border-[#FAA91C]'>{quiz.title}</p>
            <div className='flex  gap-[24px]'>
                <div className='flex flex-col justify-center items-center border-2   border-solid border-green-500 w-[15vw] p-[20px] rounded-xl'>
                    <p className='text-[80px] font-semibold'>{userMarks}</p>
                    <p className='text-[20px] '>Your Points</p>
                </div>
                <div className='flex flex-col justify-center items-center border-2 border-solid border-[#c7490a] w-[15vw] p-[20px] rounded-xl'>
                    <p className='text-[80px] font-semibold'>{totalPoint}</p>
                     <p className='text-[20px] '>Maximum Points</p>
                </div>
            </div>
            <Button variant="outlined" onClick={()=>{navigate('/')}}>Home</Button>
        </div>
      </div>
    </div>
  )
}

export default QuizeResult
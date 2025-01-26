import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import QuationCard from '../component/QuationCard'
import { Button } from '@mui/material'
import QuizeStartWindow from '../component/QuizeStartWindow'

function QuizePage() {
    const {quizId}=useParams()

    const {quizes}=useSelector((state=>state.quiz))
    // console.log(quizes)
    const [quiz]=quizes.filter((element)=>{
                return element.quizId===quizId
            })
    console.log(quiz);
    const navigate=useNavigate()

    //show quize start window 
    const [showStartWindow,setStartWindow]=useState(true)
    useEffect(()=>{
        //use to  show page at top opsition
         window.scrollTo(0, 0);
        if(showStartWindow){
             document.body.style.overflow = 'hidden';
        }else{
             document.body.style.overflow = '';
        }
    },[showStartWindow])
    
    return (
    <>
    <div>
        {/* quize Title */}
        <div className='h-[11vh] flex justify-center items-center bg-[#444645]'>
            <p className='text-[24px] font-semibold bg-[#FAA91C] p-[9px] px-[24px] rounded-md'>{quiz.title}</p>
        </div>
        {/* quations */}
        <div className='px-[22px]'>
            {quiz.questions.map((element,index)=>{
                return <QuationCard key={element.questionId} quationTitle={element.question} options={element.options} quationNo={index+1} questionId={element.questionId}/>
            })}
        </div>
        {/* meterial ui button */}
        <div className=' h-[12vh] flex justify-center items-center'>
          <Button variant="contained" color="success" onClick={()=>{navigate(`/quizeResult/${quizId}`)}}>Submit</Button>
        </div>
    </div>
    {showStartWindow && <QuizeStartWindow hidePopup={setStartWindow} totalQuations={quiz.questions.length} title={quiz.title} desc={quiz.description}/>}
    
    </>
  )
}

export default QuizePage

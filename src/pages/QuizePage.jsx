import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import QuationCard from '../component/QuationCard'

function QuizePage() {
    const {quizId}=useParams()

    const {quizes}=useSelector((state=>state.quiz))
    // console.log(quizes)
    const [quiz]=quizes.filter((element)=>{
                return element.quizId===quizId
            })
    console.log(quiz);
    
    return (
    <div>
        {/* <p>{quizId}</p> */}
        <div className='h-[11vh] flex justify-center items-center bg-[#444645]'>
            <p className='text-[24px] font-semibold bg-[#FAA91C] p-[9px] px-[24px] rounded-md'>{quiz.title}</p>
        </div>
        {/* quations */}
        <div className='px-[22px]'>
            {quiz.questions.map((element,index)=>{
                return <QuationCard key={element.questionId} quationTitle={element.question} options={element.options} quationNo={index+1} questionId={element.questionId}/>
            })}
        </div>
    </div>
  )
}

export default QuizePage

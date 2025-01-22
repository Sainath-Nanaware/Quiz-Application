import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function QuizePage() {
    const {quizId}=useParams()

    const {quizes}=useSelector((state=>state.quiz))
    console.log(quizes)
    const [quiz]=quizes.filter((element)=>{
                return element.quizId===quizId
            })
    console.log(quiz);
    
    return (
    <div>
        <p>{quizId}</p>
        <p>{quiz.title}</p>
    </div>
  )
}

export default QuizePage

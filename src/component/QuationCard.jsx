import React from 'react'


//accept options array as props and title, qno,qid is value.
function QuationCard({quationTitle,options,quationNo,questionId}) {
  return (
    <div className=' h-[32vh] border-b-2 border-b-gray-300'>
        <div className='  text-[19px] font-semibold px-[10px] h-[8vh] flex  gap-2 justify-start items-center'>
            <p>Q{quationNo}.</p>
            <p>{quationTitle}</p>
        </div>
        <div className=' text-[16px]  font-medium p-[5px] h-[22vh] flex  flex-col justify-start items-start gap-2 px-[40px]'>
            <div className='items-center'>
                <input type="radio" htmlFor={options[0].optionId} name={questionId}/>
                <label htmlFor={options[0].optionId} className='px-[10px]'>{options[0].answer}</label>
            </div>
            <div>
                 <input type="radio" htmlFor={options[1].optionId} name={questionId}/>
                <label htmlFor={options[1].optionId} className='px-[10px]'>{options[1].answer}</label>
            </div>
            <div>
                <input type="radio" htmlFor={options[2].optionId} name={questionId}/>
                <label htmlFor="c" className='px-[10px]'>{options[2].answer}</label>
            </div>
            <div>
                <input type="radio" htmlFor={options[3].optionId} name={questionId}/>
                <label htmlFor={options[3].optionId} className='px-[10px]'>{options[3].answer}</label>
            </div>
        </div>
        
    </div>
  )
}

export default QuationCard

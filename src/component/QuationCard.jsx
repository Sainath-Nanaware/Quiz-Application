import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOptionObj } from '../slices/selectOptionSlice';


//accept options array as props and title, qno,qid is value.
function QuationCard({quationTitle,options,quationNo,questionId}) {

    const {selectOptions}=useSelector((state=>state.selectOption));
    const dispatch=useDispatch()
    // let selectOptionObj={
    //     quationId:'',
    //     optionId:''

    // }
    function handleOnchange(optionId){
        //send object to update selectionOption State Array
        dispatch(addOptionObj({
        quationId:questionId,
        optionId:optionId
    }))
    }
    console.log(selectOptions)
  return (
    <div className=' h-[32vh] border-b-2 border-b-gray-300'>
        <div className='  text-[19px] font-semibold px-[10px] h-[8vh] flex  gap-2 justify-start items-center'>
            <p>Q{quationNo}.</p>
            <p>{quationTitle}</p>
        </div>
        <div className=' text-[16px]  font-medium p-[5px] h-[22vh] flex  flex-col justify-start items-start gap-2 px-[40px]'>
            <div className='items-center'>
                <input type="radio" htmlFor={options[0].optionId} name={questionId} value={options[0].answer} onChange={()=>{handleOnchange(options[0].optionId)}}/>
                <label htmlFor={options[0].optionId} className='px-[10px]'>{options[0].answer}</label>
            </div>
            <div>
                 <input type="radio" htmlFor={options[1].optionId} name={questionId} value={options[1].answer} onChange={()=>{handleOnchange(options[1].optionId)}}/>
                <label htmlFor={options[1].optionId} className='px-[10px]'>{options[1].answer}</label>
            </div>
            <div>
                <input type="radio" htmlFor={options[2].optionId} name={questionId} value={options[2].answer} onChange={()=>{handleOnchange(options[2].optionId)}}/>
                <label htmlFor="c" className='px-[10px]'>{options[2].answer}</label>
            </div>
            <div>
                <input type="radio" htmlFor={options[3].optionId} name={questionId} value={options[3].answer} onChange={()=>{handleOnchange(options[3].optionId)}}/>
                <label htmlFor={options[3].optionId} className='px-[10px]'>{options[3].answer}</label>
            </div>
        </div>
        
    </div>
  )
}

export default QuationCard

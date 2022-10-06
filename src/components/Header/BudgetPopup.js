import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client';
import {TiDelete} from 'react-icons/ti'
import { createRoot } from 'react-dom/client';
const portal=createRoot(document.getElementById('portal'))



const BudgetPopup = ({showPopup,setShowPopup,setBudget}) => {
    const BudgetRef=useRef()
    const [err,setErr]=useState('')
    function handleSetBudget(){
        if(BudgetRef.current.value.length>2&&BudgetRef.current.value.length<=6){
            setBudget(BudgetRef.current.value)
            setShowPopup(false)
        }else{
            setErr('make sure the budget is more than 2 figures and less than 6 ')
            setTimeout(()=>{
                setErr('')
            },5000)
            
        }
    }


    return portal.render(
   <>{showPopup? <div 
    className='fixed top-0 right-0
    h-full w-full bg-gray-300 bg-opacity-75 grid justify-center items-center '>
        <div className='w-full h-fit bg-white p-4 rounded gap-2 justify-center grid text-xl relative '>
            <p className='text-blue-500 font-bold'>Budget:</p>
            <div className='flex border-2 border-blue-500 p-1 rounded'>
            <input maxLength={6} minLength={2} required          className='outline-none font-bold required:  w-full'
            ref={BudgetRef}></input >
            <p className='font-bold text-blue-500'>$</p>
            </div>
            <div className='text-rose-600 font-bold text-sm text-wrap w-full '><p>{err}</p></div>
            <button className='bg-blue-500 text-white font-bold rounded border border-blue-500 hover:bg-white hover:text-blue-500 transition-all'
            onClick={()=>handleSetBudget()}
            >SET BUDGET</button>
            <button className='scale-150 absolute -right-1 '><TiDelete className='text-red-500 hover:text-red-400' 
                onClick={()=>{
                setShowPopup(false)}}
            /></button>
        </div>
    </div>:null}</>
  )
}

export default BudgetPopup
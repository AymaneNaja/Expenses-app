import React, { useState } from 'react'
import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { TiDelete } from 'react-icons/ti'
import { Slider } from '@mui/material';
import { CirclePicker } from 'react-color'



const portal=createRoot(document.getElementById('portal'))

const ExpensePopup = (
  {showPopup,setShowPopup,setRemainder,setExpenses,Expenses,Remainder,Budget}) => {
  const [color,setColor]=useState('#ecf00a')
  const [title,setTitle]=useState('')
  const [expense,setexpense]=useState(0)
  const [ExpenseErr,setExpenseErr]=useState('')
  const [TitleErr,setTitleErr]=useState('')
  const TitleRef=useRef()

  function handleExpense(){
    if(expense>=1){
    const ranNumb=Math.floor(Math.random()*10000)
    const updatedEx={
      title:title,
      color:color,
      expense:parseInt(expense),
      id:ranNumb
    }
    setExpenses([...Expenses,updatedEx])
    setShowPopup(false)
    setRemainder(prev=>prev+parseInt(expense))
    }
    else{
      setExpenseErr("expense can't be 0$...")     
      setTimeout(()=>{
        setExpenseErr('')
      },10000)
    }
  if(TitleRef.current.value.length<3){
    setTitleErr('title is too short')
    setTimeout(()=>{
      setTitleErr('')
    },10000)

  }
    }

  return portal.render(
    <>{showPopup?<div 
    className='fixed  top-0 right-0 h-full w-full bg-gray-300 bg-opacity-75  flex justify-center items-center '
    >
        <div className='w-4/6 max-w-md h-fit bg-white p-4 rounded-xl gap-2 justify-center grid text-xl relative'>
            {/* Title */}
            <p className='text-blue-500 font-bold'>Title:</p>
            <div className='flex border-2 border-blue-500 p-1 rounded'>
            <input required minLength={3}
            maxLength={20} className='outline-none font-bold '
            ref={TitleRef}
            onChange={()=>{
            setTitle(TitleRef.current.value)
            }}></input >
            </div>
            <p className='text-red-500 font-bold'>{TitleErr}</p>
            {/* Expense */}
            <p className='text-blue-500 font-bold'>Expense:</p>
            <div className='flex 
            justify-between gap-6 p-1 rou nded'>
              <Slider 
              min={0}
              max={Budget-Remainder}
              value={expense}
              valueLabelDisplay="auto" 
              onChange={(slider)=>setexpense(slider.target.value)}
              />
              <p className='font-bold text-blue-500'>{expense}$</p>
            </div>
            <p className='text-red-500 font-bold'>{ExpenseErr}</p>
            {/* colors */}
            <div className='flex gap-2 items-center my-2' >
            <p className='font-bold text-blue-500 '>
              Colors
            </p>
            <CirclePicker  onChange={(picker)=>setColor(picker.hex)}/>
            </div>
            {/*  */}
            <button className='bg-blue-500 text-white font-bold rounded border border-blue-500 hover:bg-white hover:text-blue-500 transition-all'
             onClick={(e)=>{e.preventDefault()
             handleExpense()}}>Set Expense</button>
            <button className='scale-150 absolute -right-1 -top-2 '><TiDelete className='text-red-500 hover:text-red-400' 
            onClick={()=>setShowPopup(false)}
            /></button>
        </div>
    </div>:null}</>
  )
}

export default ExpensePopup
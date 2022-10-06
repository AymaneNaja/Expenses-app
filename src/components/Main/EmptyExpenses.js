import React, { useState } from "react";
export function EmptyExpenses({Expenses,setShowPopup,Budget}) {
  const [err,setErr]=useState(false)

  function handleClick(){
    if(Budget>=2){
      setShowPopup(true)
    }
    if(Budget<2){
      setErr(true)
      setTimeout(()=>{
        setErr(false)
      },2000)

    }

  }

  return (< >
        {Expenses.length<1 ? 
        <div className='w-full h-full mt-2 relative '>
        <div 
        onClick={()=>handleClick()}
        className='w-full h-full border-2  border-blue-700 text-blue-700 border-dashed flex  justify-center items-center rounded text-xl font-semibold cursor-pointer py-36 relative hover:text-white hover:bg-blue-300 transition-all hover:border-white hover:underline hover:text-2xl'>
        <p>Add Expenses</p>
        {err?<p className="absolute translate-y-8 text-red-500">Please Enter Budget</p>:null}
        </div>
        </div> : null}
    </>)
}
  
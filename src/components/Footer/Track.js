import React from 'react'

const Track = ({Expenses,Budget,Remainder}) => {

  return (
    <div >
        <div className='w-full border-2 h-fit border-blue-500 mt-2 flex rounded'
        style={{padding:Remainder<1?'0.5rem':0}}>
          {Expenses.map(ex=>{
            console.log(ex.expense/Budget*100)
            return(
              <div style={{width:`${ex.expense/Budget*100}%`,backgroundColor:ex.color}} className='p-2.5'>
              </div>
            )
          })}
        </div>
        <div className='flex justify-between font-bold'>
            <p className='text-red-500'>Expenses:{Remainder}$</p>
            <p className='text-blue-500'>Budget:{Budget}$</p>
        </div>
    </div>
  )
}

export default Track
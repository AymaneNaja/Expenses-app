import React from 'react'

const RemainingBudget = ({Remainder,Budget}) => {
  return (
    <div className='w-full grid justify-center
    items-start mb-2 text-center'>
        <p className='font-bold text- underline text-zinc-800'>Remaining Budget</p>
        <p className='font-bold text-2xl text-emerald-500'>{Budget-Remainder}$</p>
    </div>
  )
}

export default RemainingBudget
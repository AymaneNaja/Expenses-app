import React from 'react'
import {AiFillEdit} from 'react-icons/ai'

const BudgetSetup = ({setShowPopup,Budget}) => {
  
  return (
    <div >
        {Budget==0?
        <button className='p-1 bg-blue-500 font-bold text-white rounded  border-blue-500 border-2 transition-all hover:bg-white hover:text-blue-500'
        onClick={()=>setShowPopup(true)}>ADD BUDGET</button>:
        <div className='font-bold flex text-xl'>
        <p className='text-green-500'>{Budget}</p>
        <p className='text-green-500'>$</p>
        <button onClick={()=>
        setShowPopup(true)
        }
        className='bg-green-500 text-white p-1 mx-2 rounded flex justify-center items-start border border-green-500 hover:bg-white hover:text-green-500 transition-all'
        >
        <AiFillEdit/>
        </button>
        </div>}
        
    </div>
  )
}

export default BudgetSetup
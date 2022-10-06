import React from 'react'
import { TiDelete } from 'react-icons/ti'
const Expense = ({Expenses,setShowPopup,Budget,setExpenses,Remainder,setRemainder}) => {



  function removeExpense(id){
    const UpdatdExpenses=Expenses.filter(ex=>{
      if(ex.id!==id){
        return ex
      }
      else if(ex.id==id){
        setRemainder(prev=>prev-ex.expense)
      }
      else{return}
    })
    console.log(Remainder)
    setExpenses(UpdatdExpenses)
  }
  return (
    <>
    {Expenses.length>=1?
      <div className=' expense-comp'>{Expenses.map(ex=>{
        return (
          <div style={{ borderBottom:`4px ${ex.color} solid`}}
          className='font-bold text-xl flex justify-between items-center p-2 my-2   '>
            <p>{ex.title}</p>
            <div className='flex gap-2'>
              <p className='text-green-500'>{ex.expense}$</p>
              <button onClick={()=>removeExpense(ex.id)} ><TiDelete className=' text-rose-600 scale-150 hover:text-rose-800'/></button>
            </div>
          </div>
          
        )
      })}
      {Remainder<Budget?<button 
        onClick={()=>{setShowPopup(true)}}
        className='w-full p-1 bg-blue-500  text-white font-bold text-lg rounded mt-2 hover:bg-white hover:text-blue-500 border border-blue-500 transition-all'>Add Expense</button>:null}
      </div>
    :null}
   
    </>
  )
}

export default Expense
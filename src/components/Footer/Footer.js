import React from 'react'
import RemainingBudget from './RemainingBudget'
import Track from './Track'
import { useExpense } from '../../ExpenseContext'


const Footer = () => {
  const {Budget,setBudget,Expenses,setExpenses,Remainder,setRemainder} =useExpense()
  return (
    <div className= 'w-full h-full '>
      <Track Expenses={Expenses} Budget={Budget}
        Remainder={Remainder}
      />
      <RemainingBudget
       Budget={Budget}
      Remainder={Remainder}/>
    </div>
  )
}

export default Footer
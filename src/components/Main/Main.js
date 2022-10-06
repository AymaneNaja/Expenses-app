import { EmptyExpenses } from './EmptyExpenses';
import React, { useState } from 'react'
import { useExpense } from '../../ExpenseContext'
import ExpensePopup from './ExpensePopup';
import Expense from './Expense';

const Main = () => {
    const {Budget,setBudget,Expenses,setExpenses,Remainder,setRemainder} =useExpense()
    const [showPopup,setShowPopup]=useState(false)
  return (

    <div className='w-full h-3/4  mt-2 relative'>
        <EmptyExpenses 
        Budget={Budget}
        setShowPopup={setShowPopup} 
        Expenses={Expenses}   /> 
        <ExpensePopup 
        Budget={Budget}
        Remainder={Remainder}
        Expenses={Expenses}
        setExpenses={setExpenses}
        setRemainder={setRemainder}
        setShowPopup={setShowPopup} 
        showPopup={showPopup}
        />
        <Expense 
        setRemainder={setRemainder}
        Remainder={Remainder}
        setExpenses={setExpenses}
        Budget={Budget}
        Expenses={Expenses}
        setShowPopup={setShowPopup} />
    </div>
  )
}

export default Main
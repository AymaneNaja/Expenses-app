import { useState } from 'react'
import BudgetPopup from './BudgetPopup'
import BudgetSetup from './BudgetSetup'
import Logo from './Logo'
import { useExpense } from '../../ExpenseContext'

const Header = () => {
  const {Budget,setBudget,Expenses,setExpenses,Remainder,setRemainder} =useExpense()
  const [showPopup,setShowPopup]=useState(false)
  return (
    <div className='flex justify-between'>
        <Logo/>
        <BudgetSetup  showPopup={showPopup} setShowPopup={setShowPopup} Budget={Budget}/>
        <BudgetPopup showPopup={showPopup} setShowPopup={setShowPopup} setBudget={setBudget} Budget={Budget}/>
    </div>
  )
}

export default Header
import { createContext, useContext,useState } from "react";


const ExpenseContext=createContext()
export const useExpense=()=>{
    return useContext(ExpenseContext)
}
const ExpenseProvider = ({children}) => {
    const [Budget,setBudget]=useState(0)
    const [Expenses,setExpenses]=useState([])
    const [Remainder,setRemainder]=useState(0)
  return (
    <ExpenseContext.Provider value={{Budget,setBudget,Expenses,setExpenses,Remainder,setRemainder}}>
    {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider


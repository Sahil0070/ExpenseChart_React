import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

  const [isediting,setIsEditing] = useState(false);
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = ()=>{
    setIsEditing(true);
  }
  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
        {!isediting && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isediting && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        
    </div>
  )
}

export default NewExpense

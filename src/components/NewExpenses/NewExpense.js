import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense=(props) => {
    const[isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };      
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const showEdittingHandler=()=>{
        setIsEditing(true);
    };

    const stopEdittingHandler =()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing &&<button onClick={showEdittingHandler}>Add Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancle ={stopEdittingHandler}/>}
        </div>
    );
}

export default NewExpense;
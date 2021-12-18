import React  from "react";
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm =(props) =>{
   const[enteredTitle,setEnteredTitle]= useState('');
   const[enteredAmount,setEnteredAmount]= useState('');
   const[enteredDate,setEnteredDate]= useState('');

   /* const [userInput,setInput] = useState({
    enteredTitle: '',
    enteredAmount :'',
    enteredDate:''
   }) */

    const titleChangeHnadler = (event) =>{
        setEnteredTitle(event.target.value);
        /* setInput({
            ...userInput,
            enteredTitle : event.target.value,
        }); */
        /* setInput((pervs)=>{                                                     //use this function if your current state is depend on pervious state ex:-counter
            return{ ...pervs,enteredTitle:event.target.value};
        }) */
    };
    const amountChangeHnadler = (event) =>{
        setEnteredAmount(event.target.value);
        //setInput({
        //    ...userInput,
        //    enteredAmount : event.target.value,
        //});
    };
    const dateChangeHnadler = (event) =>{
        setEnteredDate(event.target.value);
        /* setInput({
            ...userInput,
            enteredDate : event.target.value,
        }); */
    };
    const sumbitHandler=(event)=>{
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseDate(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return(
        <form id = '1' onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHnadler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min ="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHnadler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHnadler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onCancle}>Cancle</button>               
            </div>
        </form>
    );
}

export default ExpenseForm;
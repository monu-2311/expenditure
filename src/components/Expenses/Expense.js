import React, { useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";
import './Expense.css';

function Expense(props){
  const[filterYear,setFilterYear] = useState('2021');

  const filterEventHandler=(selectedYear)=>{
    setFilterYear(selectedYear);
  };

  const filterExpensesByDate = props.item.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear;
  });
    return(
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterEventHandler}/>
        <ExpensesChart expenses={filterExpensesByDate}/>
        <ExpensesList item ={filterExpensesByDate}/>
       {/*  {filterExpensesByDate.length ===0 && <p>No Expense Fond.</p>}
        {filterExpensesByDate.length > 0 && filterExpensesByDate.map(expense => <ExpenseItem  key ={expense.id} Date={expense.date} Title={expense.title} Amonut={expense.amount}/>)
        } */
        /* { filterExpensesByDate.length ===0 ? 
        <p>No Expense Fond.</p>:
        filterExpensesByDate.map(expense => 
        <ExpenseItem  key ={expense.id} 
        Date={expense.date} Title={expense.title} Amonut={expense.amount}/>)} */}
      </Card>
    );
}

export default Expense; 
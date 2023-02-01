import React,{useRef} from "react";
import classes from "./Expenses.module.css";
import { useState } from "react";
const Expenses=()=>{

    const amountRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();

    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = async (event) => {
        event.preventDefault();
    
        const inputData = {
          amount: amountRef.current.value,
          type: typeRef.current.value,
          description: descriptionRef.current.value,
        };
        setExpenses([...expenses, inputData]);
    }

    return(
        <div>
        <form className={classes.form} onSubmit={addExpenseHandler}>
        <div className={classes.type}>
          <label>Expense Category: </label>
          <select ref={typeRef} required>
            <option>Food</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Transport</option>
            <option>Adventure</option>
          </select>
        </div>
        <div className={classes.amount}>
          <label>Expense Amount: </label>
          <input type='number' min='0' ref={amountRef} required />
        </div>
        <div className={classes.description}>
          <label>Expense Description: </label>
          <textarea type='text' ref={descriptionRef} required />
        </div>
        <div className={classes.button}>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
        <ul className={classes.items}>
        {expenses.map((expense, index) => (
            <li key={index} >
            Amount: {expense.amount}, Type: {expense.type},
            Description: {expense.description}
          </li>
            ))}
        </ul>
      </div>
    )
}
export default Expenses;
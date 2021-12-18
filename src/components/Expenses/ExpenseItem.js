import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const  ExpenseItem=(props)=> {
    return (
        <Card className="expense-item">
           <ExpenseDate date ={props.Date}/>
            <div className="expense-item__description">
                <h2>{props.Title}</h2> 
                <div className="expense-item__price">$ {props.Amonut}</div>
            </div>
         </Card>
    ); 
}

export default ExpenseItem;

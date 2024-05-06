import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses);
        } else if (newBudget > 20000) {
            alert("Budget cannot exceed 20 000");
            setNewBudget(0);
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: ({currency})</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
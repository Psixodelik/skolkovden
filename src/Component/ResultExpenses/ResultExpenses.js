import React from 'react';
import './ResultExpenses.scss';

export default (props) => {
  const date = new Date();
  const dayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const expensesValue = props.expenses.reduce((acc, expense) => {
    return acc += expense.value;
  }, 0);

  const resultOneDay = Math.floor((props.salary - props.bank - expensesValue) / dayInMonth);

  return(
    <div className = 'resultWrap'>
      <div className = 'resultCommonExpenses'>
        <div className = 'title'>Всего месячных трат</div>
        <div className = 'value'>{ Number(expensesValue) + Number(props.bank) }</div>
      </div>
      <div className = 'resultOneDay'>
        <div className = 'title'>В день можно тратить</div>
        <div className = 'value'>{ resultOneDay }</div>
      </div>
    </div>
  );
}
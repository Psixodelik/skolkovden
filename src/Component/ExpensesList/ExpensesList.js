import React from 'react';
import CurrentBank from '../CurrentBank/CurrentBank';
import ResultExpenses from '../ResultExpenses/ResultExpenses';

import './ExpensesList.scss';

class ExpensesList extends React.Component {

  render() {
    
    const expensesList = this.props.expenses.map((expense, index) => {
      return (
        <div className = 'expenseItem' key = {index}>
          <div className = 'expenseItemName'><input defaultValue = { expense.name } onChange = { event => this.props.itemNameChange(event, index) } /></div>
          <div className = 'expenseItemValue'><input defaultValue = { expense.value } onBlur = { event => this.props.itemValueChange(event, index) } /></div>
        </div>    
      );
    });

    return (
      <section className = 'mainData'>
        <CurrentBank
          bank = { this.props.bank }
          nameBank = 'Сколько откладываем в месяц: '
          salary = { this.props.salary }
          nameSalary = 'Сколько получаете в месяц: '

          salaryChangeEL = { this.props.salaryChange }
          bankChangeEL = { this.props.bankChange }
        />
        <div className = 'expensesItemsWrap'>
          <header>
            <h2>Затраты в месяц</h2>
            <div className = 'addItemBtn' onClick = { this.props.addItem }>Добавить затраты</div>
          </header>      
          <div className = "expenseItem header">
            <div className = "expenseItemName">На что тратим?</div>
            <div 
              className = "expenseItemValue">Сколько тратим?</div>
          </div>
          { expensesList }
        </div>
        <ResultExpenses
          expenses = { this.props.expenses }
          salary = { this.props.salary }
          bank = { this.props.bank }
        />
      </section>
    );
  }

};

export default ExpensesList;
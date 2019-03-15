import React, { Component } from 'react';
import mexp from 'math-expression-evaluator';

//Components
import Header from '../Header/Header';
import ExpensesList from '../ExpensesList/ExpensesList';

//CSS
import './App.scss';

class App extends Component {

  state = {
    expenses: [
      // { name: 'Квартира', value: 30000 },
      // { name: 'Еда', value: 15000 },
      // { name: 'Транспорт', value: 5000 },
      // { name: 'Телефон', value: 450 },
      // { name: 'Инет', value: 320 },
    ],
    salary: 0,
    bank: 0,
  }
  

  addItem = () => {
    let newExpenses = [...this.state.expenses];
    newExpenses.push({ name: 'Название', value: 0 });

    this.setState({ expenses: newExpenses });
  };

  itemValueChange = (event, index) => {
    let newExpenses = [...this.state.expenses];    
    const value = mexp.eval(event.target.value);
    newExpenses[index].value = value;

    this.setState({ expenses: newExpenses });
  };

  itemNameChange = (event, index) => {
    let newExpenses = [...this.state.expenses];
    const name = event.target.value.trim() || '';
    newExpenses[index].name = name;

    this.setState({ expenses: newExpenses });
  };

  salaryChangeHandler = (event) => {
    const salary = mexp.eval(event.target.value);  
    this.setState({ salary });
  };

  bankChangeHandler = (event) => {
    const bank = Number(
      event.target.value
        .trim()
        .replace(/\s/g, '') 
      || 0
    );

    this.setState({ bank });
  };

  
  render() {
    return (
      <div className = 'expensesRoot'>
        <Header />
        <ExpensesList
          expenses = { this.state.expenses }
          bank = { this.state.bank }
          salary = { this.state.salary }

          addItem = { this.addItem }
          itemNameChange = { this.itemNameChange }
          itemValueChange = { this.itemValueChange }
          salaryChange = { this.salaryChangeHandler }
          bankChange = { this.bankChangeHandler }
        />
        
      </div>
    );
  };

  componentDidMount() {
    
  }

};

export default App;

import React from 'react';
import './CurrentBank.scss';

export default (props) => {
  
  return (
    <section className = 'bankWrap'>
      <div className = 'bankItem'>
        <div className = 'bankTitle'>{ props.nameSalary }</div>
        <div className = 'bankValue'><input type = 'text' defaultValue = { props.salary } onBlur = { props.salaryChangeEL } /></div>
      </div>
      <div className = 'bankItem'>
        <div className = 'bankTitle'>{ props.nameBank }</div>
        <div className = 'bankValue'><input type = 'text' defaultValue = { props.bank } onBlur = { props.bankChangeEL } /></div>
      </div>
    </section>
  );
};
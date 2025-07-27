import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === 'C') {
      setInput('');
      setResult('');
    } else if (label === '=') {
      try {
        setResult(eval(input)); // Warning: eval can be dangerous in real-world applications
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + label);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <Display value={result || input || '0'} />
      <div className="button-grid">
        {buttons.map((label, index) => (
          <Button key={index} label={label} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

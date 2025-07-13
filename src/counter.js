// src/Counter.js

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const increase = () => {
    if (count < maxLimit) {
      setCount(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      {count === maxLimit && <p style={styles.warning}>You've reached the limit!</p>}

      <button style={styles.button} onClick={increase}>Increase</button>
      <button style={styles.button} onClick={decrease}>Decrease</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  warning: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default Counter;

// write button card here
import React from 'react';

const Button = () => {
  return (
    <button style={styles.button}>View Product</button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  }
};

export default Button;

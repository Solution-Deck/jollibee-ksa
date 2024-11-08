import React from 'react';

const Button = ({ label, classname }) => {
  return (
    <button className={classname} >
      {label}
    </button>
  );
};

export default Button;

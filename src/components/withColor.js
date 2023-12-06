import React, { useState } from 'react';

const withColor = (WrappedComponent) => {
  return () => {
    const [backColor, setBackColor] = useState('WHITE');
    const [color,setColor]=useState('BLACK')

    const handleButtonClick = () => {
      setBackColor(backColor === 'WHITE' ? 'BLACK' : 'WHITE');
      setColor(color === 'BLACK' ? 'WHITE':'BLACK')
    };

    return (
      <WrappedComponent
        backgroundColor={backColor}
        buttonName={`Change to ${backColor === 'WHITE' ? 'BLACK' : 'WHITE'}`}
        onButtonClick={handleButtonClick}
        color={color}
      />
    );
  };
};

export default withColor;

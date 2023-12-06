import React from 'react';
import withColor from './withColor';

const ColorButton = ({ backgroundColor, buttonName, onButtonClick,color }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        color:color
      }}
      onClick={onButtonClick}
    >
      {buttonName}
    </button>
  );
};

export default withColor(ColorButton) ;

import React from 'react';
import ColorButton from './components/ColorButton';
import withColor from './components/withColor';

const EnhancedColorButton = withColor(ColorButton);

const App = () => {
  return (
    <div className="App">
      <h1>your code here</h1>
      <EnhancedColorButton />
    </div>
  );
};

export default App;

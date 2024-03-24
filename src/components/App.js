import React, { useState } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const App = () => {
  const [budget, setBudget] = useState(100); // Initial budget
  const [eaten, setEaten] = useState([]); // Array to track eaten sushi

  const eatSushi = (sushi) => {
    if (budget >= sushi.price && !eaten.includes(sushi)) {
      setBudget(budget - sushi.price);
      setEaten([...eaten, sushi]);
    } else {
      alert('Not enough budget or sushi already eaten!');
    }
  };

  return (
    <div className="app">
      <SushiContainer eatSushi={eatSushi} />
      <Table budget={budget} eaten={eaten} />
    </div>
  );
};

export default App;

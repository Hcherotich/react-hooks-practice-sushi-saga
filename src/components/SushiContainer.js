import React, { useState, useEffect } from 'react';
import Sushi from './Sushi';
import MoreButton from './MoreButton';

const SushiContainer = ({ eatSushi }) => {
  const [sushiData, setSushiData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(response => response.json())
      .then(data => setSushiData(data));
  }, []);

  const renderSushi = () => {
    return sushiData.slice(index, index + 4).map(sushi => (
      <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
    ));
  };

  const handleMoreClick = () => {
    setIndex(prevIndex => prevIndex + 4);
  };

  return (
    <div className="sushi-container">
      {renderSushi()}
      <MoreButton onClick={handleMoreClick} />
    </div>
  );
};

export default SushiContainer;

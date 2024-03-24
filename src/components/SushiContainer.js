import React, { useState, useEffect } from 'react';
import Sushi from './Sushi';
import MoreButton from './MoreButton';

function SushiContainer() {
  const [sushiData, setSushiData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3001/sushi')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setSushiData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleMoreButtonClick = () => {
    setStartIndex(prevIndex => prevIndex + 4);
  };

  const renderSushi = () => {
    return sushiData.slice(startIndex, startIndex + 4).map(sushi => (
      <Sushi key={sushi.id} sushi={sushi} />
    ));
  };

  return (
    <div className="belt">
      {renderSushi()}
      <MoreButton onClick={handleMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;

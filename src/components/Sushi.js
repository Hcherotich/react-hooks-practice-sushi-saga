import React from 'react';

const Sushi = ({ sushi, eatSushi }) => {
  const handleClick = () => {
    eatSushi(sushi);
  };

  return (
    <div className="sushi-plate">
      <div onClick={handleClick} className="sushi">
        <img src={sushi.img_url} alt={sushi.name} />
        <h4>{sushi.name} - ${sushi.price}</h4>
      </div>
    </div>
  );
};

export default Sushi;

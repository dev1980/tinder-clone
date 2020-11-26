import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Joe Biden',
      url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    },
      {
      name: 'Forest',
      url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    },
      {
      name: 'Sea',
      url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing:" + nameToDelete);
  };

  const outofFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
       {
       people.map((person) => ( 
         <TinderCard 
         className="swipe"
         key={person.name}
         preventSwipe={["up", "down"]}
         onSwipe={(dir) => swiped(dir, person.name)}
         onCardLeftScreen = { () => outofFrame(person.name)}
         >
        <div 
        style={{ backgroudImage: `url(${person.url})`}}
        className="card">
          <h3>{person.name}</h3>
        </div>
         </TinderCard>
       ))
     }
    </div>
    
    </div>
  )
}

export default TinderCards

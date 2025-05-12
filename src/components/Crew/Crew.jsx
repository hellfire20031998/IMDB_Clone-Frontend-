import React from 'react';
import Card from '../Card/Card';
import './Crew.css';

function Crew({ crew }) {
  return (
    <div className='crew'>
      <h1>Crew</h1>
      <div className='crew-grid'>
        {crew.map((item) => (
          <Card item={item} key={item.credit_id} />
        ))}
      </div>
    </div>
  );
}

export default Crew;

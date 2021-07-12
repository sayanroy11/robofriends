import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='w5 h-auto tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div className= 'garamond'>
        <h2 className='f4'>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
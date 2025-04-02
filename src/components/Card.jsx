import React from 'react';
import "../styles/Card.css"

const Card = ({ data, name, daylight  }) => {
  return (
    <>
      <div className={`container ${daylight ? "dark-mode" : ""}`}>
        <div className='container--1'>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>City: {data.address.city}</p>
        </div>
        {name === "admin" && (
          <>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </>
        )}
      </div>
    </>
  );
}

export default Card;

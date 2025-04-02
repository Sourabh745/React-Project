import React from "react";
import "../styles/Modal.css"; // Add modal styles

const Modal = ({ user, onClose, daylight }) => {
  return (
    <div className= {`modal-1 `}>
      <div className={`modal ${daylight ? " dark-mode" : ""}`}>
        <button className={`close-btn`} onClick={onClose}>✖</button>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Address: {user.address.city}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchUser from '../actions/FetchUser.jsx';
import Card from '../components/Card.jsx';
import "../styles/CardData.css"
import Modal from './Modal.jsx';

const MyDashboard = ({ name, daylight }) => {
  const [terms, setTerms] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState('card'); // Toggle between 'card' and 'table'

  const dispatch = useDispatch();
  const { userList } = useSelector(state => state);

  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  const openModal = (user) => {
    setSelectedUser(user);
  }

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className='main-1'>
      <h1>Hello, It's {name} dashboard</h1>
      
      <label htmlFor="hello">Search: </label>
      <input id="hello" type="text" value={terms} onChange={(e) => setTerms(e.target.value)} />
      
      <div className='controls'>
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        
        <button onClick={() => setViewMode(viewMode === 'card' ? 'table' : 'card')}>
          Switch to {viewMode === 'card' ? 'Table' : 'Card'} View
        </button>
      </div>
      
      {viewMode === 'card' ? (
        <ul className="container-1">
          {userList
            .filter(user => user.name.toLowerCase().includes(terms.toLowerCase()))
            .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
            .map(user => (
              <li key={user.id} onClick={() => openModal(user)}>
                <Card data={user} name={name} daylight={daylight} />
              </li>
            ))
          }
        </ul>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList
              .filter(user => user.name.toLowerCase().includes(terms.toLowerCase()))
              .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
              .map(user => (
                <tr key={user.id}>
                  <td onClick={() => openModal(user)}>{user.name}</td>
                  <td>{user.email}</td>
                  <td> <button> Edit </button></td>
                  <td><button onClick={() => openModal(user)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}
      
      {selectedUser && <Modal user={selectedUser} onClose={closeModal} daylight={daylight}/>} 
    </div>
  );
}

export default MyDashboard;

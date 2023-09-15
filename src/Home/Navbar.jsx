import React, { useState } from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const current = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const HomeClick = () => {
    current('/home');
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const routePendingDetails = () => {
    current('/pendingtasks');
  }

  const routeCompltedTask = () => {
    current('/completedtask');
  }

  const routeOverDue = () => {
    current('/overdue');
  }

  return (
    <div className="head">
      <div onClick={HomeClick}>Task<span className='spanModify'>Manager</span></div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>Navigate</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div onClick={HomeClick}>Home</div>
            <div onClick={routePendingDetails}>Pending</div>
            <div onClick={routeCompltedTask}>Completed</div>
            <div onClick={routeOverDue}>Overdue</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

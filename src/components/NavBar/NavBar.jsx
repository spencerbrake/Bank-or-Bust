import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <Link to='' onClick={props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </div>
      :

        <nav>
            <NavLink exact to='/'>
                My Bets
            </NavLink>
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/bet-history'>
                Bet History
            </NavLink>
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/signup'>
                Sign Up
            </NavLink>
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/login'>
                Login
            </NavLink>
                &nbsp;&nbsp;&nbsp;
        </nav>

return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

  export default NavBar;
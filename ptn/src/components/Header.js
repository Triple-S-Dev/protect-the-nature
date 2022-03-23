import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div className='left'>
            <li>
              <Link className='logo' to='/'>
                GotongRoyong
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/event'>Events</Link>
            </li>
            <li>
              <Link to='/leaderboard'>Leaderboard</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/signin'>Sign in</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

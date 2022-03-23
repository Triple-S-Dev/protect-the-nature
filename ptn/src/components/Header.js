import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div className='left'>
            <li>
              <a className='logo' href='/'>
                GotongRoyong
              </a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Events</a>
            </li>
            <li>
              <a href='/'>Leaderboard</a>
            </li>
          </div>
          <div>
            <li>
              <a href='/'>Sign in</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import { EventName } from '../styled-components';

export default function Footer() {
  return (
    <footer>
      <p>
        2021 &copy; Copyright{' '}
        <EventName className='bold'>GotongRoyong</EventName>{' '}
      </p>
      <p className='bold'>
        <EventName>#SelamatkanAlamIndonesia</EventName>{' '}
      </p>
    </footer>
  );
}

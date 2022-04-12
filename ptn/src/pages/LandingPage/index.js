import React from 'react';
import { Text, Btn, Flex } from '../../styled-components';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const router = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();
    router('/event');
  };

  return (
    <Flex className='hero'>
      <div className='hero-left'>
        <h1 className='hero-title'>Selamatkan alam kita, mulai dari kamu.</h1>
        <Text className='mt-16'>
          Kami akan membantu Anda mengatur pembersihan alam di daerah Anda
        </Text>
        <Btn onClick={onButtonClick} className='mt-16'>
          Lihat Acara
        </Btn>
      </div>
      <div>
        <img
          className='hero-image'
          src='https://cdn.dribbble.com/users/1731254/screenshots/11649852/nature_gradients_illustration_tubikarts_4x.png'
          alt='alam Indonesia'
        />
      </div>
    </Flex>
  );
}

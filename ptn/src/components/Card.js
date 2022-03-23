import React from 'react';
import {
  Cards,
  Image,
  CardsTitle,
  FlexText,
  CardMain,
  Text,
} from '../styled-components';

export default function Card({
  gambar,
  namaEvent,
  participant,
  tanggal,
  lokasi,
}) {
  return (
    <div>
      <Cards>
        <Image src={gambar} />

        <CardsTitle>{namaEvent}</CardsTitle>
        <CardMain>
          <FlexText>
            <img src='/icons/people.svg' alt='participants-icon' />
            <Text>{participant} participants</Text>
          </FlexText>
          <FlexText>
            <img src='/icons/location.svg' alt='participants-icon' />
            <Text>{tanggal}</Text>
          </FlexText>
          <FlexText>
            <img src='/icons/date.svg' alt='participants-icon' />
            <Text>{lokasi}</Text>
          </FlexText>
        </CardMain>
      </Cards>
    </div>
  );
}

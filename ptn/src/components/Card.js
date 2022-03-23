import React from 'react';
import {
  Cards,
  Image,
  CardsTitle,
  FlexText,
  CardMain,
  Text,
} from '../styled-components';
import { Link } from 'react-router-dom';

export default function Card({
  eventsId,
  gambar,
  namaEvent,
  participant,
  tanggal,
  lokasi,
}) {
  return (
    <div>
      <Link to={`/event/detail/${eventsId}`}>
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
      </Link>
    </div>
  );
}

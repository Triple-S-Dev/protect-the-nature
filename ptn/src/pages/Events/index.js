import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import {
  Title,
  EventName,
  Container,
  ListCard,
  Text,
  Margin6,
  Margin32,
} from '../../styled-components';
import Card from '../../components/Card';

export default function Events() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase.from('events').select(`*`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  // console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <div>
        <Title>
          {' '}
          Ayo Gotong Royong untuk{' '}
          <EventName>#SelamatkanAlamIndonesia</EventName>{' '}
        </Title>
        <Margin6 />
        <Text>
          Find the place to clean our nature together, remove all the plastic
          and trash from our nature.
        </Text>
      </div>
      <Margin32 />
      <ListCard>
        {data.map((acara, index) => (
          <Card
            key={index}
            eventsId={acara.id}
            gambar={acara.images}
            namaEvent={acara.nama_destinasi}
            participant={14}
            tanggal={acara.tanggal}
            lokasi={acara.daerah}
          />
        ))}
      </ListCard>
    </Container>
  );
}

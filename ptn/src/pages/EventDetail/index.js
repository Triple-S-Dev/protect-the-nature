import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { useParams } from 'react-router-dom';
import {
  Container,
  DetailImage,
  Flex,
  Text,
  Title,
  EventName,
  FlexText,
  Btn,
} from '../../styled-components';

export default function EventDetail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('events')
        .select(`*`)
        .match({ id });

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
  console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Flex>
        <div>
          <DetailImage src={data[0].images} />
        </div>
        <div className='column-gap-16'>
          <Title>
            <EventName>
              {loading ? 'loading...' : `${data[0].nama_destinasi}`}
            </EventName>
          </Title>
          <Text>{loading ? 'loading...' : `${data[0].deskripsi}`}</Text>
          <div className='column-gap-12'>
            <FlexText>
              <img src='/icons/people.svg' alt='participants-icon' />
              <Text>14 participants</Text>
            </FlexText>
            <FlexText>
              <img src='/icons/location.svg' alt='participants-icon' />
              <Text>{loading ? 'loading...' : `${data[0].tanggal}`}</Text>
            </FlexText>
            <FlexText>
              <img src='/icons/date.svg' alt='participants-icon' />
              <Text>{loading ? 'loading...' : `${data[0].daerah}`}</Text>
            </FlexText>
          </div>
          <div>
            <Btn>Join Event</Btn>
          </div>
        </div>
      </Flex>
    </Container>
  );
}

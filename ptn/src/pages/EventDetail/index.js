import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { useParams, useNavigate } from 'react-router-dom';
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
import PostActivity from '../../components/PostActivity';

export default function EventDetail({ user }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('events')
        .select(`*, activities(*)`)
        .eq('id', id)
        .single();

      // .match({ id });

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

  const joinEventHandler = (e) => {
    e.preventDefault();
    if (!user) {
      redirect('/signin');
    }
  };

  const postActivity = () => {
    return;
  };

  if (loading) return <div>Loading...</div>;
  console.log(user.email);
  return (
    <Container>
      <Flex>
        <div>
          <DetailImage src={data.images} />
        </div>
        <div className='column-gap-16'>
          <Title>
            <EventName>
              {loading ? 'loading...' : `${data.nama_destinasi}`}
            </EventName>
          </Title>
          <Text>{loading ? 'loading...' : `${data.deskripsi}`}</Text>
          <div className='column-gap-12'>
            <FlexText>
              <img src='/icons/people.svg' alt='participants-icon' />
              <Text>14 participants</Text>
            </FlexText>
            <FlexText>
              <img src='/icons/location.svg' alt='participants-icon' />
              <Text>{loading ? 'loading...' : `${data.tanggal}`}</Text>
            </FlexText>
            <FlexText>
              <img src='/icons/date.svg' alt='participants-icon' />
              <Text>{loading ? 'loading...' : `${data.daerah}`}</Text>
            </FlexText>
          </div>
          <div>
            {user.email ? (
              <Btn>Post Activity</Btn>
            ) : (
              <Btn onClick={joinEventHandler}>Join Event</Btn>
            )}
          </div>
        </div>
      </Flex>
      <h1 className='activityPostsTitle'>Activity Posts</h1>
      <hr />
      {data.activities.map((activity) => (
        <PostActivity
          userEmail={activity.user_email}
          story={activity.story}
          images={activity.image_activity}
          key={activity.id}
        />
      ))}
    </Container>
  );
}

// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (!user) {
//     return { props: {}, redirect: { destination: '/signin' } };
//   }

//   return { props: { user } };
// }

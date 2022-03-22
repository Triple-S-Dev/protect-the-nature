import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { supabase } from './supabase';
import './App.css';
import { Title, EventName, Container } from './styled-components';

const App = () => {
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

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <Header />
      <Container>
        <Title>
          {' '}
          Ayo Gotong Royong untuk <EventName>#SaveOurNature</EventName>{' '}
        </Title>
      </Container>
    </div>
  );
};

export default App;

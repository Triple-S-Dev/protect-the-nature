import { useState } from 'react';
import { supabase } from '../../supabase';
import {
  Btn,
  Title,
  Column,
  Margin32,
  InputEmail,
  Margin16,
} from '../../styled-components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // const [user, setUser] = useState([]);

  async function signIn() {
    const { error, data } = await supabase.auth.signIn(
      {
        email: email,
      },
      {
        redirectTo: 'http://localhost:3000/profile',
      }
    );
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }
  if (submitted) {
    return (
      <div className='container'>
        <h1>Please check your email to sign in</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <main className='main'>
        <Margin32>
          <Column>
            <Title>Sign in with Magic Link!</Title>
            <Margin32 />
            <InputEmail
              onChange={(e) => setEmail(e.target.value)}
              style={{ margin: 10 }}
              placeholder='Your email!'
            />
            <Margin16 />
            <Btn onClick={() => signIn()}>Sign In</Btn>
          </Column>
        </Margin32>
      </main>
    </div>
  );
}

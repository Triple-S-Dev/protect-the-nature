import { useState } from 'react';
import { supabase } from '../../supabase';
import {
  Btn,
  Title,
  Column,
  Margin32,
  InputEmail,
  Margin16,
  Text,
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
      <div className='container mt-100'>
        <h1 className='alert'>Please check your email to sign in</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <main className='main'>
        <Margin32>
          <Column>
            <Title>SIGN IN</Title>
            <Text className='mt-16'>
              Sign in using magic link to use our feature!
            </Text>
            <form className='mt-16' onSubmit={() => signIn()}>
              <InputEmail
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: 10 }}
                placeholder='insert your email!'
              />
            </form>
            <Margin16 />
            <Btn onClick={() => signIn()}>Sign In</Btn>
          </Column>
        </Margin32>
      </main>
    </div>
  );
}

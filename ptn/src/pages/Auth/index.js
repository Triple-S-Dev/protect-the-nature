import { useState } from 'react';
import { supabase } from '../../supabase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState([]);

  async function signIn() {
    const { error, data } = await supabase.auth.signIn(
      {
        email: email,
      },
      {
        redirectTo: 'https://example.com/welcome',
      }
    );
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
      setUser(data);
    }
  }
  console.log(user);
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
        <h1 className='title'>Sign In</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: 10 }}
        />
        <button onClick={() => signIn()}>Sign In</button>
      </main>
    </div>
  );
}

// import React from 'react'

// export default function SignIn() {
//   return (
//     <div>Sign In</div>
//   )
// }

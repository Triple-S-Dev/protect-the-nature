import { supabase } from '../../supabase';

export default function Profile({ user }) {
  console.log(user);
  return (
    <div>
      <h1>Hello From Protected Route</h1>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: '/signin' } };
  }

  return { props: { user } };
}

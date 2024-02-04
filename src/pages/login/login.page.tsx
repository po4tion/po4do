import { useEffect } from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';
import { supabase } from '../../server/provider';
import { Container } from './components';

export const LoginPage = () => {
  const login = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    console.log(data);
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();

      console.log('session: ', session.data.session?.user);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      switch (event) {
        case 'SIGNED_IN':
          break;
        case 'SIGNED_OUT':
          console.log('로그아웃');
        // window.location.reload();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Container>
      <button type="button" onClick={login}>
        로그인
      </button>
      <button type="button" onClick={logout}>
        로그아웃
      </button>
      <Outlet />
    </Container>
  );
};

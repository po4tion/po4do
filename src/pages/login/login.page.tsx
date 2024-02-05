import { useEffect } from 'react';
import { useLogin } from '../../server/auth/useLogin';
import { supabase } from '../../server/provider';
import { Github } from './assets/Github';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { LoginButton } from './components/LoginButton';

export const LoginPage = () => {
  const { login } = useLogin();

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
          window.location.reload();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>Join us!</Card.Header>

        <Card.Content>
          <LoginButton onClick={login}>
            <Github />
            Login with GitHub
          </LoginButton>

          <Card.Footer>
            By logging in with GitHub, you agree to our Terms of Service and
            Privacy Policy.
          </Card.Footer>
        </Card.Content>
      </Card>
    </Container>
  );
};

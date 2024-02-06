import { useAuthStateChange } from '../../hooks/auth/useAuthStateChange';
import { useLogin } from '../../server/auth/useLogin';
import { Github } from './assets/Github';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { LoginButton } from './components/LoginButton';

export const LoginPage = () => {
  const { mutate: executeLogin } = useLogin();
  useAuthStateChange();

  return (
    <Container>
      <Card>
        <Card.Header>Join us!</Card.Header>

        <Card.Content>
          <LoginButton onClick={() => executeLogin('github')}>
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

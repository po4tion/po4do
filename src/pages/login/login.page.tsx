import { useAuthStateChange } from '../../hooks/auth/useAuthStateChange';
import { useLogin } from '../../server/auth/mutations';
import { Github } from './assets/svgs/Github';
import { Card } from './components/Card';
import { LoginButton } from './components/LoginButton';

export const LoginPage = () => {
  const { mutate: executeLogin } = useLogin();
  useAuthStateChange();

  return (
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
  );
};

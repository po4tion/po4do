import { useEffect } from 'react';
import './App.css';
import { supabase } from './server/provider';

function App() {
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

    supabase.auth.onAuthStateChange((event) => {
      switch (event) {
        case 'SIGNED_IN':
          break;
        case 'SIGNED_OUT':
          console.log('로그아웃');
        // window.location.reload();
      }
    });
  }, []);

  return (
    <main>
      <button type="button" onClick={login}>
        로그인
      </button>
      <button type="button" onClick={logout}>
        로그아웃
      </button>
    </main>
  );
}

export default App;

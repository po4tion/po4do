import type { AuthChangeEvent } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../server/provider';

const AUTH_CHANGE_EVENT: Record<AuthChangeEvent, `/${string}`> = {
  SIGNED_IN: '/service',
  SIGNED_OUT: '/',
  INITIAL_SESSION: '/',
  TOKEN_REFRESHED: '/',
  USER_UPDATED: '/',
  MFA_CHALLENGE_VERIFIED: '/',
  PASSWORD_RECOVERY: '/',
};

export const useAuthStateChange = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      console.log(event);
      navigate(AUTH_CHANGE_EVENT[event]);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);
};

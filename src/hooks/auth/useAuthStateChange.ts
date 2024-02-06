import type { AuthChangeEvent } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../server/provider';

const AUTH_CHANGE_EVENT: Record<AuthChangeEvent, `/${string}`> = {
  SIGNED_IN: '/service',
  SIGNED_OUT: '/',
  INITIAL_SESSION: '/',
  MFA_CHALLENGE_VERIFIED: '/error',
  PASSWORD_RECOVERY: '/error',
  TOKEN_REFRESHED: '/error',
  USER_UPDATED: '/error',
};

export const useAuthStateChange = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      navigate(AUTH_CHANGE_EVENT[event]);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);
};

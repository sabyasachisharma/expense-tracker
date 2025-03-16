import { supabase } from './supabaseClient';

// Sign up a user
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error('error', error);
    throw error;
  }
  return data.user;
};

// Sign in a user
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
};

// Sign out a user
export const signOut = async () => {
  await supabase.auth.signOut();
};

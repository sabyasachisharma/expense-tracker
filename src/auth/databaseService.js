import { supabase } from './supabaseClient';

// Fetch all users
export const fetchUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

// Insert a new user
export const addUser = async (name, email) => {
  const { data, error } = await supabase.from('users').insert([{ name, email }]);
  if (error) throw error;
  return data;
};

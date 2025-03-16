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

// add transaction into transcations table
export const addTransaction = async (transaction) => {
  const { data, error } = await supabase.auth.getUser()
    
    if (error || !data?.user) {
      console.error("User not logged in", error)
      return { error: "User not logged in" }
  }
  console.log(" data.user.id",  data.user.id)
  console.log(" type data.user.id",  typeof data.user.id)
  const { data: insertData, error: insertError } = await supabase.from("transactions").insert([
    {
        user_id: data.user.id,
        email: data.user.email,
        amount: transaction.amount,
        description: transaction.description,
        created_at: new Date(),
    },
  ])
  console.log(" insertData", error, insertError) 
  return data;
};

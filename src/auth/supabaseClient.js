import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://pixjgfarygfarriattta.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeGpnZmFyeWdmYXJyaWF0dHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjk1NTEsImV4cCI6MjA1NTMwNTU1MX0.TRcc4RrhuWSHQgCtKXIGLpPFmLEJZfX3JwX97en7tMc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

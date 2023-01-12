import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tpjyfxrhdbgpbtqxoqve.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwanlmeHJoZGJncGJ0cXhvcXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyNTU5NTEsImV4cCI6MTk4ODgzMTk1MX0.wv8xiFIW3V4d3yHDjqwb1RNxpFXlDnbLPtaVfhHd6HA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

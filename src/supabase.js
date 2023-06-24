import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lchdibtuhjcxwcnnrycl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaGRpYnR1aGpjeHdjbm5yeWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjM2NTksImV4cCI6MjAwMjc5OTY1OX0.AaezAOawEp67gbSJSL5_eBeVlvLV0Z9qlYsFFIl75nk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

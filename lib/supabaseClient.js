import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zipogubruyyvhlfzqykq.supabase.co";
const supabaseKey = "sb_publishable_f_ziqLLyjrkOHXxIYT42kA_q-vz-gbK"; // clé que tu m’as donnée

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
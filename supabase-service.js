import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabaseUrl, supabaseKey } from "@env";

const supabase = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncStorage,
});

export default supabase;

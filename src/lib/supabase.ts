import { createClient } from "@supabase/supabase-js";

// Provide default values for development
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://your-project-url.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

// Only create the client if we have valid credentials
const createSupabaseClient = () => {
  if (!supabaseUrl || supabaseUrl === "https://your-project-url.supabase.co") {
    console.warn(
      "Supabase URL not configured. Please add VITE_SUPABASE_URL to your environment variables.",
    );
    return null;
  }

  if (!supabaseAnonKey || supabaseAnonKey === "your-anon-key") {
    console.warn(
      "Supabase anon key not configured. Please add VITE_SUPABASE_ANON_KEY to your environment variables.",
    );
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

import { supabase } from '../supabase';

export default function auth(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}

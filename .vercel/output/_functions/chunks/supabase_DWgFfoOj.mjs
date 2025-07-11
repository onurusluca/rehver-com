import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://xngaipxdnpjswqofnpjr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZ2FpcHhkbnBqc3dxb2ZucGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTcxMzAsImV4cCI6MjA2NTM3MzEzMH0.g1V9H_Kr3musiHJVoU-H4P0YeJlhRoJ1h4TzaHCi5d8"
);

export { supabase as s };

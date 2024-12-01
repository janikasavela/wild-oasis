import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flmeasdrufmydeyejpkl.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbWVhc2RydWZteWRleWVqcGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNTM2NjUsImV4cCI6MjA0ODYyOTY2NX0.W8xHKc48axBytBqM6KeRwqcQMgACS_Z7t9nXsup8hoc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

import { createSupabaseClient } from '@/lib/supabaseClient'
const supabase = createSupabaseClient()

export type Profile = {
  id: number
  name: string
  email: string
  image_url: string
  title: string
}

export const fetchProfiles = async (id = 1): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching user:', error)
    return null
  }

  return data
}

export const updateProfile = async (id: number, updates: Partial<Profile>): Promise<boolean> => {
  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('Error updating profile:', error)
    return false
  }

  return true
}

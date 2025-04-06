import { createSupabaseClient } from '@/lib/supabaseClient'
const supabase = createSupabaseClient()

export type SkillCategory = {
  id: number
  name: string
  color: string
  created_at: string
}

export const fetchSkillCategoryById = async (id: number): Promise<SkillCategory[] | null> => {
  const { data, error } = await supabase
    .from('skill_categories')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching skill category by id:', error)
    return null
  }

  return data
}

export const fetchAllSkillCategories = async (): Promise<SkillCategory[] | null> => {
  const { data, error } = await supabase
    .from('skill_categories')
    .select('*')

  if (error) {
    console.error('Error fetching skill categories:', error)
    return null
  }

  return data as SkillCategory[]
}

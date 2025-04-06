import { createSupabaseClient } from '@/lib/supabaseClient'
const supabase = createSupabaseClient()

export type SkillItem = {
  id: number
  subject: string
  value: number
  category_id: number
  created_at: string
}

export const fetchSkillsByCategoryId = async (categoryId: number): Promise<Omit<SkillItem, 'category'>[] | null> => {
  const { data, error } = await supabase
    .from('skills')
    .select(`
      id,
      subject,
      value,
      category_id,
      created_at
    `)
    .eq('category_id', categoryId)

  if (error) {
    console.error('Error fetching skills by category_id:', error)
    return null
  }

  return data
}

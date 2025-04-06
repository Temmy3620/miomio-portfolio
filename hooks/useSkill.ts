'use client'

import { useEffect, useState } from 'react'
import { fetchSkillsByCategoryId, SkillItem } from '@/lib/supabaseSkills'

export function useSkillsByCategoryId(category_id: number) {
  const [skills, setSkills] = useState<SkillItem[] | null>(null)

  useEffect(() => {
    const loadSkillCategory = async () => {
      const data = await fetchSkillsByCategoryId(category_id)
      setSkills(data)
    }
    loadSkillCategory()
  }, [])

  return skills
}

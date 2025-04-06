'use client'

import { useEffect, useState } from 'react'
import { fetchAllSkillCategories, SkillCategory } from '@/lib/supabaseSkillCategories'

export function useSkillCategory() {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[] | null>(null)

  useEffect(() => {
    const loadSkillCategory = async () => {
      const data = await fetchAllSkillCategories()
      setSkillCategories(data)
    }
    loadSkillCategory()
  }, [])

  return skillCategories
}

'use client'

import { useEffect, useState } from 'react'
import { fetchProfiles, Profile as SupabaseProfile } from '@/lib/supabaseProfile'

export function useProfile() {
  const [profile, setProfile] = useState<SupabaseProfile | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      const data = await fetchProfiles()
      setProfile(data)
    }
    loadProfile()
  }, [])

  return profile
}

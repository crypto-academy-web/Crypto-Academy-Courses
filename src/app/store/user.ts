// stores/useUserStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  uid: string
  email: string
  firstName: string
  lastName: string
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
)

// ✅ Custom hooks for convenience
export const useUser = () => useUserStore((state) => state.user)
export const useUserId = () => useUserStore((state) => state.user?.uid)

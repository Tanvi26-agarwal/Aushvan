import { create } from 'zustand';

const useStore = create((set) => ({
    sectionRefs: {},
    setSectionRefs: (newSection) => set((state) => {
        return {
            ...state,
            sectionRefs: newSection
        }
    }),
    user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null })
}))

export default useStore;


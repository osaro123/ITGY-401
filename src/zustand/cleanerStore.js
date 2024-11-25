import { create } from "zustand";

export const useCleanerStore = create((set) => ({
    cleaners: [],
    addCleaner: (newCleaner) => set((state) => ({cleaners: [...state.cleaners,newCleaner]}))
}))
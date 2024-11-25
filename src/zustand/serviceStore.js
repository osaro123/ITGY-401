import { create } from "zustand";

export const useServiceStore = create((set) => ({
    services: [],
    addService: (newService) => set((state) => ({services: [...state.services,newService]})) 
}))
import { create } from "zustand";

export const useBookingStore = create((set) => ({
    bookings: [],
    addBooking: (newBooking) => set((state) => ({bookings: [...state.bookings,newBooking]}))
}))

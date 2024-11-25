import React from 'react'
import { useBookingStore } from '../../zustand/bookingStore'

const Bookings = () => {
  const bookings = useBookingStore((state) => state.bookings)
  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
      <div>
        <h1 className='font-medium text-[1.602rem]'>Book Your Cleaning Service</h1>
        <p className='text-[1rem] opacity-60 max-w-sm'>It's quick and easy! Choose your service, pick a date, and let us handle the rest.</p>
      </div>
      <table className="w-full border-collapse border border-gray-300 mt-16">
          <thead className="bg-gray-100">
              <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Service</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
          </thead>
          <tbody>
              {bookings.length > 0 ? (
                  bookings.map((booking, i) => (
                      <tr key={i} className="odd:bg-white even:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">{booking.fullName}</td>
                          <td className="border border-gray-300 px-4 py-2">{booking.service}</td>
                          <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
                      </tr>
                  ))
              ) : (
                  <tr>
                      <td colSpan={3} className="border border-gray-300 px-4 py-2 text-center">
                          No bookings available
                      </td>
                  </tr>
              )}
          </tbody>
        </table>
    </div>
  )
}

export default Bookings
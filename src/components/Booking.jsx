import React, { useState } from 'react';
import { BiPlus, BiX } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { useBookingStore } from '../zustand/bookingStore';
import { toast, Toaster } from 'sonner';
import { PaystackButton } from 'react-paystack';

const Booking = () => {
  const publicKey = "pk_test_2bd4d703659c61a7f47fa4f7125a83d664601e0d"; // Fetch Paystack public key from environment variables
  const [bookingModal, setBookingModal] = useState(false);

  // Map of services to prices
  const servicePrices = {
    "Basic Cleaning": 5000,
    "Deep Cleaning": 10000,
    "Office Cleaning": 15000,
    "Customized Cleaning": 20000,
  };

  const today = new Date().toISOString().slice(0, 16)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    amount: '',
    date: '',
  });

  const addBooking = useBookingStore((state) => state.addBooking);
  const bookings = useBookingStore((state) => state.bookings);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      // Update amount based on selected service
      const selectedServicePrice = servicePrices[value] || '';
      setFormData({
        ...formData,
        [name]: value,
        amount: selectedServicePrice,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      service: '',
      amount: '',
      date: '',
    });
    setBookingModal(false);
    // toast.success('Successfully added booking');
  };

  const componentProps = {
    email: formData.email,
    amount: parseInt(formData.amount, 10) * 100, // Amount in kobo (convert from Naira)
    metadata: {
      name: formData.fullName,
      phone: formData.phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => {
      toast.success('Payment successful! Your booking has been confirmed.');
      addBooking(formData);
      setBookingModal(false);
    },
    onClose: () => toast.error('Payment process was cancelled.'),
  };

  return (
    <div className="bg-white h-[200vh] rounded-lg mb-4 p-8">
      <Toaster position="top-right" richColors />
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-medium text-[1.602rem]">Book Your Cleaning Service</h1>
          <p className="text-[1rem] opacity-60 max-w-sm">
            It's quick and easy! Choose your service, pick a date, and let us handle the rest.
          </p>
        </div>
        <button
          className="py-1.5 px-3 bg-stone-950 text-stone-100 rounded flex gap-1 items-center text-[.9rem]"
          onClick={() => setBookingModal(!bookingModal)}
        >
          <BiPlus size={18} />
          Book service
        </button>
      </div>
      <AnimatePresence>
        {bookingModal && (
          <motion.div
            className="absolute h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <form
              onSubmit={handleBooking}
              className="relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded"
            >
              <h1 className="mb-8 text-[1.424rem] font-medium">Fill Out Your Booking Details</h1>
              {[
                { label: 'Full Name', name: 'fullName', type: 'text' },
                { label: 'Email Address', name: 'email', type: 'email' },
                { label: 'Phone Number', name: 'phone', type: 'tel' },
                { label: 'Address Line 1', name: 'address', type: 'text' },
                { label: 'City', name: 'city', type: 'text' },
                { label: 'Date', name: 'datetime', type: 'datetime-local' },
              ].map(({ label, name, type }) => (
                <div className="flex gap-1 flex-col" key={name}>
                  <label htmlFor={name} className="text-[.8rem]">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    className="border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4"
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    min={today}
                  />
                </div>
              ))}
              <div className="flex gap-1 flex-col">
                <label htmlFor="service" className="text-[.8rem]">
                  Service
                </label>
                <select
                  name="service"
                  id="service"
                  className="border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {Object.keys(servicePrices).map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="amount" className="text-[.8rem]">
                  Amount (₦)
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  className="border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4"
                  value={formData.amount}
                  readOnly
                />
              </div>
              <PaystackButton
                className="bg-stone-950 hover:bg-opacity-90 text-stone-100 px-3 py-1 rounded mt-4"
                {...componentProps}
              />
              <div className="absolute top-4 right-4">
                <BiX
                  color="#0c0a09"
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setBookingModal(!bookingModal)}
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
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
    </div>
  );
};

export default Booking;

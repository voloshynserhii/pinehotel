'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { rooms } from '@/content/rooms';
import type { Room } from '@/app/types';

export function BookingForm({
  dict,
  rooms,
}: {
  dict: any;
  rooms: Room[];
}) {
  const searchParams = useSearchParams();
  const defaultRoom = searchParams.get('room');

  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: defaultRoom || '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with your booking engine/PMS
    console.log('Booking data:', bookingData);
    setSubmitted(true);
  };

  const calculateNights = (): number => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
    return nights > 0 ? nights : 0;
  };

  const selectedRoom = bookingData.rooms
    ? rooms.find((r) => r.slug === bookingData.rooms)
    : null;
  const nights = calculateNights();
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-sage-100 rounded-lg p-12">
        <h2 className="text-3xl font-serif font-bold mb-4 text-stone-900">
          Thank You!
        </h2>
        <p className="text-lg text-stone-700 mb-6">
          Your booking request has been received. We'll confirm your reservation
          within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-sage-700 text-cream-50 rounded font-semibold hover:bg-sage-800 transition-colors"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Booking Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dates Section */}
          <div className="bg-cream-50 p-6 rounded-lg">
            <h3 className="text-xl font-serif font-bold mb-4 text-stone-900">
              Dates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={bookingData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={bookingData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>
            </div>
          </div>

          {/* Room Section */}
          <div className="bg-cream-50 p-6 rounded-lg">
            <h3 className="text-xl font-serif font-bold mb-4 text-stone-900">
              Room Selection
            </h3>
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-2">
                Room Type
              </label>
              <select
                name="rooms"
                value={bookingData.rooms}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
              >
                <option value="">Select a room...</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.slug}>
                    {room.name} (€{room.price}/night)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Guest Information */}
          <div className="bg-cream-50 p-6 rounded-lg">
            <h3 className="text-xl font-serif font-bold mb-4 text-stone-900">
              Guest Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
                    placeholder="+34 123 456 789"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sage-700 text-cream-50 py-3 rounded font-semibold hover:bg-sage-800 transition-colors"
          >
            Continue to Payment
          </button>
        </form>
      </div>

      {/* Booking Summary */}
      <div className="lg:col-span-1">
        <div className="bg-cream-50 rounded-lg p-6 sticky top-24">
          <h3 className="text-xl font-serif font-bold mb-6 text-stone-900">
            Booking Summary
          </h3>

          {selectedRoom && nights > 0 ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-stone-600">Room</p>
                <p className="font-semibold text-stone-900">
                  {selectedRoom.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-600">Check-in</p>
                <p className="font-semibold text-stone-900">
                  {new Date(bookingData.checkIn).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-600">Check-out</p>
                <p className="font-semibold text-stone-900">
                  {new Date(bookingData.checkOut).toLocaleDateString()}
                </p>
              </div>
              <div className="border-t border-stone-200 pt-4">
                <p className="text-sm text-stone-600 mb-1">
                  {nights} night{nights !== 1 ? 's' : ''} × €
                  {selectedRoom.price}
                </p>
                <p className="text-2xl font-serif font-bold text-sage-700">
                  €{totalPrice}
                </p>
              </div>
              <p className="text-xs text-stone-600">
                This is an estimate. Final price may vary based on availability
                and seasonal rates.
              </p>
            </div>
          ) : (
            <p className="text-stone-600 text-sm">
              Select dates and a room to see your booking summary
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

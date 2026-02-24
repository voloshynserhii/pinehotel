'use client'

import { useState, useEffect, useRef } from 'react'
import { format, addDays } from 'date-fns'
import { GuestSelector } from './GuestSelector'
import { DateSelector } from './DateSelector'

export function BookingBar() {
  const [checkIn, setCheckIn] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [checkOut, setCheckOut] = useState(
    format(addDays(new Date(), 2), 'yyyy-MM-dd')
  )
  const [adults, setAdults] = useState(2)
  const [kids, setKids] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [showGuestSelector, setShowGuestSelector] = useState(false)
  const [showDateSelector, setShowDateSelector] = useState(false)
  const guestSelectorRef = useRef<HTMLDivElement>(null)
  const dateSelectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        guestSelectorRef.current &&
        !guestSelectorRef.current.contains(event.target as Node)
      ) {
        setShowGuestSelector(false)
      }
      if (
        dateSelectorRef.current &&
        !dateSelectorRef.current.contains(event.target as Node)
      ) {
        setShowDateSelector(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [guestSelectorRef, dateSelectorRef])

  return (
    <>
      <div className="w-full lg:w-[1200px] bg-stone-900 backdrop-blur-sm bg-opacity-60 text-white h-auto lg:h-[75px] flex flex-col lg:flex-row lg:items-stretch">
        <div
          className="relative flex-1"
          ref={dateSelectorRef}
        >
          <div
            className="flex flex-col justify-center p-4 lg:px-6 h-auto lg:h-full cursor-pointer"
            onClick={() => setShowDateSelector(!showDateSelector)}
          >
            <span className="text-xs uppercase tracking-wide opacity-70">
              Check-in
            </span>
            <span className="text-lg font-light">{checkIn}</span>
          </div>

          {showDateSelector && (
            <DateSelector
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              setShowDateSelector={setShowDateSelector}
            />
          )}
        </div>

        {/* Divider */}
        <div className="w-full lg:w-px h-px lg:h-auto bg-white/30 lg:my-5" />

        {/* Check-out */}
        <div
          className="flex flex-col justify-center p-4 lg:px-6 flex-1 cursor-pointer"
          onClick={() => setShowDateSelector(!showDateSelector)}
        >
          <span className="text-xs uppercase tracking-wide opacity-70">
            Check-out
          </span>
          <span className="text-lg font-light">{checkOut}</span>
        </div>

        {/* Divider */}
        <div className="w-full lg:w-px h-px lg:h-auto bg-white/30 lg:my-5" />

        {/* Guests */}
        <div
          className="flex flex-col justify-center p-4 lg:px-6 flex-[1.5] cursor-pointer relative"
          onClick={() => setShowGuestSelector(!showGuestSelector)}
          ref={guestSelectorRef}
        >
          <span className="text-xs uppercase tracking-wide opacity-70">
            Guests
          </span>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold">{adults + kids}</span>
              <div className="ml-2">
                <div className="font-light text-sm">Adults: {adults}</div>
                <div className="font-light text-sm">Kids: {kids}</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-right">
                <div className="font-light text-sm">Rooms</div>
                <div className="text-lg font-bold">{rooms}</div>
              </div>
            </div>
          </div>

          {showGuestSelector && (
            <GuestSelector
              adults={adults}
              setAdults={setAdults}
              kids={kids}
              setKids={setKids}
              rooms={rooms}
              setRooms={setRooms}
              setShowGuestSelector={setShowGuestSelector}
            />
          )}
        </div>

        {/* CTA */}
        <button className="bg-[#cbb8a3] text-white w-full lg:w-auto py-4 lg:py-0 lg:px-12 text-sm tracking-widest transition-colors duration-300 ease-in-out border border-transparent hover:border-white hover:bg-[#a99a8b]">
          CHECK AVAILABILITY
        </button>
      </div>
    </>
  )
}

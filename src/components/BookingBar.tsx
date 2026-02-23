'use client'

import { useState } from 'react'
import KidsAgeModal from './KidsAgeModal'

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState('2026-02-23')
  const [checkOut, setCheckOut] = useState('2026-02-24')
  const [adults, setAdults] = useState(2)
  const [kids, setKids] = useState(0)
  const [kidAges, setKidAges] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rooms, setRooms] = useState(1)

  const handleAddKid = () => {
    setKids(kids + 1)
    if (kids + 1 > 0) {
      setIsModalOpen(true)
    }
  }

  const handleRemoveKid = () => {
    const newKidsCount = Math.max(0, kids - 1)
    setKids(newKidsCount)
    if (newKidsCount < kidAges.length) {
      setKidAges(kidAges.slice(0, newKidsCount))
    }
  }

  const handleAgeChange = (index: number, age: number) => {
    const newAges = [...kidAges]
    newAges[index] = age
    setKidAges(newAges)
  }

  const handleCloseModal = () => {
    const ages = [...kidAges]
    while (ages.length < kids) {
      ages.push(0)
    }
    setKidAges(ages)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="w-full bg-stone-900 backdrop-blur-sm bg-opacity-60 text-white h-[110px] flex items-stretch">
        {/* Check-in */}
        <div className="flex flex-col justify-center px-6 flex-1">
          <span className="text-xs uppercase tracking-wide opacity-70">
            Check-in
          </span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent border-none text-lg font-light outline-none date-input"
          />
        </div>

        {/* Divider */}
        <div className="w-px bg-white/30 my-5" />

        {/* Check-out */}
        <div className="flex flex-col justify-center px-6 flex-1">
          <span className="text-xs uppercase tracking-wide opacity-70">
            Check-out
          </span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent border-none text-lg font-light outline-none date-input"
          />
        </div>

        {/* Divider */}
        <div className="w-px bg-white/30 my-5" />

        {/* Guests */}
        <div className="flex flex-col justify-center px-6 flex-[1.5]">
          <span className="text-xs uppercase tracking-wide opacity-70">
            Guests
          </span>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-lg font-light">{adults} Adults</span>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  −
                </button>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <span className="text-lg font-light">{kids} Kids</span>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleRemoveKid}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  −
                </button>
                <button
                  onClick={handleAddKid}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <span className="text-lg font-light">Rooms: {rooms}</span>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  −
                </button>
                <button
                  onClick={() => setRooms(rooms + 1)}
                  className="w-7 h-7 border border-white/40 text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="bg-[#cbb8a3] text-white px-12 text-sm tracking-widest">
          CHECK AVAILABILITY
        </button>
      </div>
      {isModalOpen && (
        <KidsAgeModal
          kids={kids}
          kidAges={kidAges}
          onAgeChange={handleAgeChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}
'use client'

import { Dispatch, SetStateAction } from 'react'
import { GuestInfo } from 'app/types'

interface GuestSelectorProps {
  guestInfo: GuestInfo
  setGuestInfo: Dispatch<SetStateAction<GuestInfo>>
  setShowGuestSelector: Dispatch<SetStateAction<boolean>>
}

export function GuestSelector({
  guestInfo,
  setGuestInfo,
  setShowGuestSelector,
}: GuestSelectorProps) {
  const { adults, kids, rooms, kidAges } = guestInfo

  const handleAddKid = () => {
    setGuestInfo((prev) => ({
      ...prev,
      kids: prev.kids + 1,
      kidAges: [...prev.kidAges, 0],
    }))
  }

  const handleRemoveKid = () => {
    if (kids > 0) {
      setGuestInfo((prev) => ({
        ...prev,
        kids: prev.kids - 1,
        kidAges: prev.kidAges.slice(0, prev.kids - 1),
      }))
    }
  }

  const handleAgeChange = (index: number, age: number) => {
    setGuestInfo((prev) => {
      const newAges = [...prev.kidAges]
      newAges[index] = age
      return { ...prev, kidAges: newAges }
    })
  }

  const handleAdultsChange = (amount: number) => {
    setGuestInfo((prev) => ({
      ...prev,
      adults: Math.max(1, prev.adults + amount),
    }))
  }

  const handleRoomsChange = (amount: number) => {
    setGuestInfo((prev) => ({
      ...prev,
      rooms: Math.max(1, prev.rooms + amount),
    }))
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-full mt-2 lg:top-auto lg:bottom-[75px] left-0 right-0 z-50 bg-stone-900 backdrop-blur-sm bg-opacity-60 text-white shadow-lg p-6 w-full lg:w-[500px]"
    >
      <div className="flex flex-col gap-4">
        {/* Adults */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-light">Adults</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleAdultsChange(-1)}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              −
            </button>
            <span className="text-xl font-light w-8 text-center">
              {adults}
            </span>
            <button
              onClick={() => handleAdultsChange(1)}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Kids */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-light">Kids</span>
          <div className="flex items-center gap-4">
            <button
              onClick={handleRemoveKid}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              −
            </button>
            <span className="text-xl font-light w-8 text-center">{kids}</span>
            <button
              onClick={handleAddKid}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Kid Ages */}
        {kids > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-light">Age of children</h3>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(kids)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <label className="text-sm">Child {i + 1}</label>
                  <input
                    type="number"
                    min="0"
                    max="17"
                    value={kidAges[i] || ''}
                    onChange={(e) =>
                      handleAgeChange(i, parseInt(e.target.value))
                    }
                    className="border p-1 rounded w-16 bg-stone-800 text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rooms */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-light">Rooms</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleRoomsChange(-1)}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              −
            </button>
            <span className="text-xl font-light w-8 text-center">{rooms}</span>
            <button
              onClick={() => handleRoomsChange(1)}
              className="w-8 h-8 border border-white/40 text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowGuestSelector(false)}
        className="w-full mt-6 bg-[#cbb8a3] text-white py-3 text-sm tracking-widest"
      >
        DONE
      </button>
    </div>
  )
}

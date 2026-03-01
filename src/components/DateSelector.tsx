'use client'

import { Dispatch, SetStateAction, useState, useContext } from 'react'
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
} from 'date-fns'
import { DictionaryContext } from '@/context/DictionaryContext'

interface DateSelectorProps {
  checkIn: string
  setCheckIn: Dispatch<SetStateAction<string>>
  checkOut: string
  setCheckOut: Dispatch<SetStateAction<string>>
  setShowDateSelector: Dispatch<SetStateAction<boolean>>
}

export function DateSelector({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  setShowDateSelector,
}: DateSelectorProps) {
  const dict = useContext(DictionaryContext)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const handleDateClick = (day: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (isBefore(day, today)) {
      return
    }

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(format(day, 'yyyy-MM-dd'))
      setCheckOut('')
    } else if (checkIn && !checkOut) {
      if (isBefore(day, new Date(checkIn))) {
        setCheckIn(format(day, 'yyyy-MM-dd'))
      } else {
        setCheckOut(format(day, 'yyyy-MM-dd'))
      }
    }
  }

  if (!dict) return null

  const t = dict.DateSelector

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="w-8 h-8 border border-white/40 text-lg"
        >
          &lt;
        </button>
        <span className="text-xl font-light">
          {format(currentMonth, 'MMMM yyyy')}
        </span>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="w-8 h-8 border border-white/40 text-lg"
        >
          &gt;
        </button>
      </div>
    )
  }

  const renderDays = () => {
    const days = [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
    return (
      <div className="grid grid-cols-7 text-center text-xs opacity-70">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const days = eachDayOfInterval({ start: startDate, end: endDate })
    const checkInDate = checkIn ? new Date(checkIn) : null
    const checkOutDate = checkOut ? new Date(checkOut) : null

    return (
      <div className="grid grid-cols-7 text-center mt-2">
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, monthStart)
          const isSelected =
            (checkInDate && isSameDay(day, checkInDate)) ||
            (checkOutDate && isSameDay(day, checkOutDate))
          const isInRange =
            checkInDate &&
            checkOutDate &&
            isAfter(day, checkInDate) &&
            isBefore(day, checkOutDate)
          const isPast = isBefore(day, new Date()) && !isSameDay(day, new Date())

          return (
            <div
              key={day.toString()}
              className={`py-2 text-lg font-light cursor-pointer ${
                !isCurrentMonth ? 'text-white/30' : ''
              } ${
                isPast ? 'text-white/20 cursor-not-allowed' : ''
              } ${
                isSelected
                  ? 'bg-[#cbb8a3] text-stone-900 rounded-full'
                  : isInRange
                  ? 'bg-[#cbb8a3]/30'
                  : ''
              }`}
              onClick={() => !isPast && handleDateClick(day)}
            >
              {format(day, 'd')}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="absolute top-full mt-2 lg:top-auto lg:bottom-[75px] left-0 z-50 bg-stone-900 backdrop-blur-sm bg-opacity-60 text-white shadow-lg p-6 w-full lg:w-[500px]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <button
        onClick={() => setShowDateSelector(false)}
        className="w-full mt-6 bg-[#cbb8a3] text-white py-3 text-sm tracking-widest"
      >
        {t.done}
      </button>
    </div>
  )
}
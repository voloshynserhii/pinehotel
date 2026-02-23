import React from 'react'

interface KidsAgeModalProps {
  kids: number
  kidAges: number[]
  onAgeChange: (index: number, age: number) => void
  onClose: () => void
}

export default function KidsAgeModal({
  kids,
  kidAges,
  onAgeChange,
  onClose,
}: KidsAgeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-black">
        <h2 className="text-xl font-bold mb-4">Enter ages of children</h2>
        {[...Array(kids)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 mb-2">
            <label>Child {i + 1} age:</label>
            <input
              type="number"
              min="0"
              max="17"
              value={kidAges[i] || ''}
              onChange={(e) => onAgeChange(i, parseInt(e.target.value))}
              className="border p-2 rounded w-20"
            />
          </div>
        ))}
        <button
          onClick={onClose}
          className="bg-[#cbb8a3] text-white px-6 py-2 rounded-lg mt-4"
        >
          Done
        </button>
      </div>
    </div>
  )
}

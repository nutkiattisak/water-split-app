import { useState } from "react"
import "./App.css"

import WaterBuckets from "./components/WaterBuckets"

function App() {
  const [buckets, setBuckets] = useState([8, 0, 0])
  const [moves, setMoves] = useState([])

  const pourWater = (from, to) => {
    const newBuckets = [...buckets]
    const amount = Math.min(newBuckets[from], [8, 5, 3][to] - newBuckets[to])
    newBuckets[from] -= amount
    newBuckets[to] += amount
    setBuckets(newBuckets)
    setMoves([
      ...moves,
      `เท ${amount}ลิตร จาก ถัง ${from + 1} ไปยังถัง ${to + 1}`,
    ])
  }

  const resetPuzzle = () => {
    setBuckets([8, 0, 0])
    setMoves([])
  }

  const isSolved = buckets[0] === 4 && buckets[1] === 4

  return (
    <>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-center">
              Water Bucket Puzzle
            </div>
          </div>
          <div>
            <p className="mb-4 text-center">
              คุณมีถังน้ำ 3 ใบ ขนาด 8 ลิตร, 5 ลิตร และ 3 ลิตร ถังขนาด 8 ลิตรเต็มไปด้วยน้ำ ส่วนถังอื่นๆ ว่างเปล่า คุณต้องการแบ่งน้ำให้ได้ถังละ 4 ลิตรพอดี
            </p>
            <WaterBuckets buckets={buckets} />
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[0, 1, 2].map((from) => (
                <div key={from} className="space-y-2">
                  {[0, 1, 2].map(
                    (to) =>
                      from !== to && (
                        <button
                          key={to}
                          onClick={() => pourWater(from, to)}
                          className="w-full bg-red-500 text-white"
                          disabled={isSolved}
                        >
                          {from + 1} → {to + 1}
                        </button>
                      )
                  )}
                </div>
              ))}
            </div>
            <button onClick={resetPuzzle} className="w-full mt-4 border-blue-500 bg-blue-300">
              Reset Puzzle
            </button>
            {isSolved && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Congratulations! You've solved the puzzle!
              </div>
            )}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Moves:</h3>
              <ul className="list-disc pl-5">
                {moves.map((move, index) => (
                  <li key={index}>{move}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

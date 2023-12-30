import {
  formatTimeLeft,
  getCurrentTimeStamp,
  getTimeLeft,
  toMilliseconds
} from '@/lib/date-time'
import { ChangeEvent, useEffect, useState } from 'react'
import { useCountdown } from 'usehooks-ts'
export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState<string>()
  const [intervalValue, setIntervalValue] = useState<number>(1000)
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 30,
      intervalMs: intervalValue
    })

  const handleChangeIntervalValue = (event: ChangeEvent<HTMLInputElement>) => {
    setIntervalValue(Number(event.target.value))
  }

  useEffect(() => {
    const timeLeft = formatTimeLeft()
    setTimeLeft(timeLeft)
  }, [])

  useEffect(() => {
    if (count === 0) {
      resetCountdown()
      startCountdown()
    }
  }, [count])
  useEffect(() => {
    startCountdown()
  }, [])
  console.log('timeLeft', timeLeft)
  return (
    <div>
      <p>Count: {count}</p>

      <input
        type="number"
        value={intervalValue}
        onChange={handleChangeIntervalValue}
      />
      <button onClick={startCountdown}>start</button>
      <button onClick={stopCountdown}>stop</button>
      <button onClick={resetCountdown}>reset</button>
    </div>
  )
}

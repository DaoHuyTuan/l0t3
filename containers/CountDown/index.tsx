import { ChangeEvent, useEffect, useState } from 'react'
import { useCountdown } from 'usehooks-ts'
export const CountDown = () => {
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
    if (count === 0) {
      resetCountdown()
      startCountdown()
    }
  }, [count])
  useEffect(() => {
    startCountdown()
  }, [])
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

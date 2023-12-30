import { getTime, differenceInMilliseconds, format } from 'date-fns'

export const toMilliseconds = (time: Date | number) => {
  return getTime(time)
}

export const getCurrentTimeStamp = () => {
  return new Date()
}

export const getMintTime = () => {
  const mintTime = Number(process.env.NEXT_PUBLIC_MINT_TIME)
  const currentTime = getCurrentTimeStamp()
  const currentYear = currentTime.getFullYear()
  const currentMonth = currentTime.getMonth()
  const currentDate = currentTime.getDate()
  const targetTime = new Date(
    currentYear,
    currentMonth,
    currentDate,
    mintTime,
    0,
    0
  ).getTime()
  if (targetTime < currentTime.getTime()) {
    debugger
    return new Date(
      currentYear,
      currentMonth,
      currentDate + 1,
      mintTime,
      0,
      0
    ).getTime()
  }
  return targetTime
}

export const getTimeLeft = () => {
  return getMintTime() - new Date().getTime()
}

export const formatTimeLeft = () => {
  const timeLeft = getTimeLeft()
  console.log('timeLeft', timeLeft)
  if (timeLeft < 0) {
    return format(timeLeft * -1, 'dd/MM/yyyy')
  }
  return format(timeLeft, 'dd/MM/yyyy')
}

import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })
    return daysMatrix;
}

export function getWeek(date = dayjs().date()) {
  const month = dayjs().month();
  const year = dayjs().year();
  let currentMonthCount = date - 1;
  const daysMatrix = new Array(1).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
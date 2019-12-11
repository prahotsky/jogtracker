import parse from "date-fns/parse"

export const filterByDate = (arr, startDate, endDate) => {
  return arr.filter((el) => {
    let result = false
    if (startDate) {
      if (
        parse(el.date, "dd.MM.yyyy", new Date()).getTime() >=
        startDate.setHours(0, 0, 0, 0)
      ) {
        result = true
      } else {
        return false
      }
    }
    if (endDate) {
      if (
        parse(el.date, "dd.MM.yyyy", new Date()).getTime() <=
        endDate.setHours(0, 0, 0, 0)
      ) {
        result = true
      } else {
        return false
      }
    }
    return result
  })
}

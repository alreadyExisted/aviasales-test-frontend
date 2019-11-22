const checkFilter = (filters, payload) => {
  return filters.indexOf(payload) === -1
    ? [...filters, payload]
    : filters.filter(item => item !== payload)
}

export const createFilter = (filters, payload) => {
  switch (payload) {
    case 'all':
      return [0, 1, 2, 3]
    case 0:
    case 1:
    case 2:
    case 3:
      return checkFilter(filters, payload)
    default:
      return []
  }
}

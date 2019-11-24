import api from './axios'

export const getSearchId = () => {
  return api.get('search')
}

export const getTickets = (searchId: string) => {
  return api.get('tickets', { params: { searchId } })
}

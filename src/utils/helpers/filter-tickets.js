export const filterTickets = (stops, sorting, tickets) => {
  const filteredTickets = tickets.filter(
    ticket =>
      stops.indexOf(ticket.segments[0].stops.length) !== -1 &&
      stops.indexOf(ticket.segments[1].stops.length) !== -1
  )
  sorting === 'cheapest'
    ? filteredTickets.sort((a, b) => a.price - b.price)
    : filteredTickets.sort((a, b) => {
        return (
          a.segments.reduce((total, item) => total + item.duration, 0) -
          b.segments.reduce((total, item) => total + item.duration, 0)
        )
      })
  return filteredTickets.slice(0, 5)
}

import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterTickets } from 'utils/helpers'
import { TicketItem } from 'components/ticket-item'
import { startSeach } from 'store/actions/ticket'

export const TicketContainer = () => {
  const stops = useSelector(state => state.filters.stops)
  const sorting = useSelector(state => state.filters.sorting)
  const tickets = useSelector(state => state.tickets.tickets)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startSeach())
  }, [dispatch])
  const filteredTickets = useMemo(
    () => filterTickets(stops, sorting, tickets),
    [stops, sorting, tickets]
  )
  return (
    <>
      {filteredTickets.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </>
  )
}

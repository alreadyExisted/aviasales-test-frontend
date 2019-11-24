import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterTickets } from 'utils/helpers'
import { TicketItem } from 'components/ticket-item'
import { startSeach } from 'store/actions/ticket'
import { RootStore, Ticket } from 'store'

export const TicketContainer = () => {
  const stops = useSelector((state: RootStore) => state.filter.stops)
  const sorting = useSelector((state: RootStore) => state.filter.sorting)
  const tickets = useSelector((state: RootStore) => state.ticket.tickets)
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
      {filteredTickets.map((ticket: Ticket, index: number) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </>
  )
}

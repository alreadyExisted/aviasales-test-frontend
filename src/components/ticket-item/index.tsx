import React, { useMemo } from 'react'
import styles from './styles.module.css'
import { formatDuration, formatTime } from 'utils/helpers'
import { Plural } from 'utils/constants'
import { Segment, Ticket } from 'store'

interface SegmentProps {
  segment: Segment
}

interface TicketProps {
  ticket: Ticket
}

const SegmentItem = ({segment : {stops, date, duration, origin, destination}}: SegmentProps) => {
  const stopsCount: number = useMemo(() => stops.length, [stops])
  const formattedDuration: string = useMemo(() => formatDuration(duration), [duration])
  const formattedTime: string = useMemo(() => formatTime(date, duration), [
    date,
    duration
  ])

  return (
    <div className={styles.segment}>
      <div className={styles.column}>
        <div className={styles.label}>
          {origin} - {destination}
        </div>
        <div>{formattedTime}</div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>В пути</div>
        <div>{formattedDuration}</div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>{Plural[stopsCount]}</div>
        <div>
          {stops.map((stop: string, index: number) => (
            <>{index === stopsCount - 1 ? stop : `${stop}, `}</>
          ))}
        </div>
      </div>
    </div>
  )
}

export const TicketItem = ({ ticket: { price, carrier, segments } }: TicketProps) => {
  return (
    <div className={styles.ticketContainer}>
      <div className={styles.mainInfo}>
        <span className={styles.price}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      {segments.map((segment: Segment, index: number) => (
        <SegmentItem key={index} segment={segment} />
      ))}
    </div>
  )
}

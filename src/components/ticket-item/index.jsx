import React, { useMemo } from 'react'
import styles from './styles.module.css'
import { formatDuration, formatTime } from 'utils/helpers'
import { plural } from 'utils/constants'

const Segment = ({
  segment: { origin, destination, date, duration, stops }
}) => {
  const stopsCount = useMemo(() => stops.length, [stops])
  const formattedDuration = useMemo(() => formatDuration(duration), [duration])
  const formattedTime = useMemo(() => formatTime(date, duration), [
    date,
    duration
  ])

  return (
    <div className={styles.segment}>
      <div class={styles.column}>
        <div className={styles.label}>
          {origin} - {destination}
        </div>
        <div>{formattedTime}</div>
      </div>
      <div class={styles.column}>
        <div className={styles.label}>В пути</div>
        <div>{formattedDuration}</div>
      </div>
      <div class={styles.column}>
        <div className={styles.label}>{plural[stopsCount]}</div>
        <div>
          {stops.map((stop, index) => (
            <>{index === stopsCount - 1 ? stop : `${stop}, `}</>
          ))}
        </div>
      </div>
    </div>
  )
}

export const TicketItem = ({ ticket: { price, carrier, segments } }) => {
  return (
    <div className={styles.ticketContainer}>
      <div className={styles.mainInfo}>
        <span className={styles.price}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      {segments.map((segment, index) => (
        <Segment key={index} segment={segment} />
      ))}
    </div>
  )
}

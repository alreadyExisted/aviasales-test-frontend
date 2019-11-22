import React, { useState, useEffect, useCallback } from 'react'
import styles from './styles.module.css'
import { avaibleFilters } from 'utils/constants'
import { createFilter } from 'utils/helpers'
import { useSelector, useDispatch } from 'react-redux'

export const FilterPicker = () => {
  const stops = useSelector(state => state.filters.stops)
  const dispatch = useDispatch()
  const [filters, setFilters] = useState(stops)
  const setStops = useCallback(
    () => dispatch({ type: 'SET_FILTER', payload: filters }),
    [dispatch, filters]
  )
  useEffect(() => {
    setStops()
  }, [setStops])
  const handleChange = async value => {
    setFilters(createFilter(filters, value))
  }

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <label htmlFor={'all'} className={styles.checkboxLabel}>
        <input
          id="all"
          type="checkbox"
          value={'all'}
          onChange={() => handleChange('all')}
          checked={stops.length === avaibleFilters.length}
        />
        Все
      </label>
      {avaibleFilters.map((item, index) => (
        <label
          key={index}
          htmlFor={item.title}
          className={styles.checkboxLabel}
        >
          <input
            id={item.title}
            type="checkbox"
            value={item.value}
            onChange={() => handleChange(item.value)}
            checked={stops.includes(item.value)}
          />
          {item.title}
        </label>
      ))}
    </div>
  )
}

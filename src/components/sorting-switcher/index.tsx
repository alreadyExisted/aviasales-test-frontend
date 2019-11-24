import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.css'
import { avaibleSorting } from 'utils/constants'
import { useDispatch } from 'react-redux'

const cx = classNames.bind(styles)

export const SortingSwitcher = () => {
  const [sortParameter, setSortParameter] = useState('cheapest')
  const dispatch = useDispatch()
  const setSorting = useCallback(
    () => dispatch({ type: 'SET_SORTING', payload: sortParameter }),
    [dispatch, sortParameter]
  )
  useEffect(() => {
    setSorting()
  }, [setSorting])

  return (
    <div className={styles.switcherContainer}>
      {avaibleSorting.map((item, index) => (
        <button
          className={cx({
            switchButton: true,
            first: index === 0,
            last: index === avaibleSorting.length - 1,
            active: item.type === sortParameter
          })}
          key={index}
          onClick={() => setSortParameter(item.type)}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

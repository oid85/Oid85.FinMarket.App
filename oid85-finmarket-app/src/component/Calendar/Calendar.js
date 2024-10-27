import React from 'react'
import './Calendar.css'

export const Calendar = ({value}) => {
    
    let date = Date.parse(value)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return (
        <React.Fragment>
            <div className='calendar'>
                <div className='calendar-header calendar-month'>{month}</div>
                <div className='calendar-body'>
                    <div className='calendar-day'>{day}</div>
                    <div className='calendar-year'>{year}</div>
                </div>
            </div>
        </React.Fragment>
    )
}
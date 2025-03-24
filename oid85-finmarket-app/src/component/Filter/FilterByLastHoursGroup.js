import React from 'react'
import {FilterByLastHours} from './FilterByLastHours'
import './Filter.css'

export const FilterByLastHoursGroup = () => {
    
    let days = [6, 12, 24, 48]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    days.map((item, index) => (
                        <FilterByLastHours
                        key={index} 
                        days={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
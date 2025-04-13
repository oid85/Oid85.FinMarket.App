import React from 'react'
import {FilterByLastHours} from './FilterByLastHours'
import './Filter.css'

export const FilterByLastHoursGroup = () => {
    
    let hours = [6, 12, 24, 48]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    hours.map((item, index) => (
                        <FilterByLastHours key={index} hours={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
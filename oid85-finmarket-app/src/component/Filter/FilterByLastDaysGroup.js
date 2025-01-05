import React from 'react'
import {FilterByLastDays} from './FilterByLastDays'
import './Filter.css'

export const FilterByLastDaysGroup = () => {
    
    let days = [7, 30, 90, 180, 365]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    days.map((item, index) => (
                        <FilterByLastDays 
                        key={index} 
                        days={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
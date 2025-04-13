import React from 'react'
import {FilterByTickerList} from './FilterByTickerList'
import './Filter.css'

export const FilterShareByTickerListGroup = () => {

    let tickerLists = ["all"]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByTickerList key={index} tickerList={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
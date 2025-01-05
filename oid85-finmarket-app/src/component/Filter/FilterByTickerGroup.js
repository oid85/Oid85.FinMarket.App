import React from 'react'
import './Filter.css'
import {FilterByTicker} from './FilterByTicker'

export const FilterByTickerGroup = ({tickers}) => {

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickers.map((item, index) => (
                        <FilterByTicker
                        key={index}
                        ticker={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
import React from 'react'
import {FilterByBacktestResultTicker} from './FilterByBacktestResultTicker'
import '../Filter.css'

export const FilterByBacktestResultTickerGroup = () => {
    
    let tickers = [
        'USDRUBF'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickers.map((item, index) => (
                        <FilterByBacktestResultTicker key={index} ticker={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
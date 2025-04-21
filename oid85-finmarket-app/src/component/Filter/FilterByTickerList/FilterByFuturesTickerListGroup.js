import React from 'react'
import {FilterByFuturesTickerList} from './FilterByFuturesTickerList'
import '../Filter.css'

export const FilterByFuturesTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'futures/watchlist'
    dict['ПОРТФЕЛЬ'] = 'futures/portfolio'

    let tickerLists = [
        'НАБЛЮД',
        'ПОРТФЕЛЬ'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByFuturesTickerList
                            key={index}
                            tickerListName={item}
                            tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
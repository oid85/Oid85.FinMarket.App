import React from 'react'
import {FilterByFuturesTickerList} from './FilterByFuturesTickerList'
import '../Filter.css'

export const FilterByFuturesTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'futures/watchlist'
    dict['ПОРТФЕЛЬ'] = 'futures/portfolio'
    dict['USD'] = 'futures/usd'
    dict['RI'] = 'futures/ri'
    dict['MOEX'] = 'futures/moex'
    dict['GLD'] = 'futures/gld'
    dict['EUR'] = 'futures/eur'
    dict['CHY'] = 'futures/cny'

    let tickerLists = [
        'НАБЛЮД',
        'ПОРТФЕЛЬ',
        'USD',
        'RI',
        'MOEX',
        'GLD',
        'EUR',
        'CHY'
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
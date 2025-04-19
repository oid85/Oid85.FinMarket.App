import React from 'react'
import {FilterByFuturesTickerList} from './FilterByFuturesTickerList'
import '../Filter.css'

export const FilterByFuturesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'futures/watchlist'
    dict['Портфель'] = 'futures/portfolio'

    let tickerLists = [
        'Лист. набл.',
        'Портфель'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByFuturesTickerList key={index} tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
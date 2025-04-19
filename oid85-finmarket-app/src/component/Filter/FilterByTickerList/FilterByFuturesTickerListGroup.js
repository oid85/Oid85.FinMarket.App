import React from 'react'
import {FilterByFuturesTickerList} from './FilterByFuturesTickerList'
import '../Filter.css'

export const FilterByFuturesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'futures/watchlist'

    let tickerLists = ['Лист. набл.']

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
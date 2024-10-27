import React from 'react'
import {FilterByLastDays} from './FilterByLastDays'
import {FilterByTickerList} from './FilterByTickerList'
import {CONSTANTS} from '../../constants'
import './Filter.css'

export const FilterMarket = () => {
    
    let days = [7, 30, 90, 180, 365]
    let tickerLists = [
        { name: CONSTANTS.TICKER_LIST_ALL, text: 'Все'},
        { name: CONSTANTS.TICKER_LIST_MOEX_INDEX, text: 'IRUS'},
        { name: CONSTANTS.TICKER_LIST_PORTFOLIO, text: 'Портфель'},
        { name: CONSTANTS.TICKER_LIST_WATCH_LIST, text: 'Watchlist'}
    ]

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
                {
                    tickerLists.map((item, index) => (
                        <FilterByTickerList 
                        key={index} 
                        name={item.name}
                        text={item.text} />
                    ))
                }            
            </div>
        </React.Fragment>
    )
}
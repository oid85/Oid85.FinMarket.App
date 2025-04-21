import React from 'react'
import {FilterByCurrenciesTickerList} from './FilterByCurrenciesTickerList'
import '../Filter.css'

export const FilterByCurrenciesTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'currencies/watchlist'

    let tickerLists = [
        'НАБЛЮД'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByCurrenciesTickerList
                            key={index}
                            tickerListName={item}
                            tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
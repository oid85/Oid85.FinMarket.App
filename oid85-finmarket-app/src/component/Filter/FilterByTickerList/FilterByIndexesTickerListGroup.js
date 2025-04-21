import React from 'react'
import {FilterByIndexesTickerList} from './FilterByIndexesTickerList'
import '../Filter.css'

export const FilterByIndexesTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'indexes/watchlist'

    let tickerLists = [
        'НАБЛЮД'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByIndexesTickerList
                            key={index}
                            tickerListName={item}
                            tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
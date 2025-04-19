import React from 'react'
import {FilterByIndexesTickerList} from './FilterByIndexesTickerList'
import '../Filter.css'

export const FilterByIndexesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'indexes/watchlist'

    let tickerLists = ['Лист. набл.']

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByIndexesTickerList key={index} tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
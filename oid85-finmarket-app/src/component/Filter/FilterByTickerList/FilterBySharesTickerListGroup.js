import React from 'react'
import {FilterBySharesTickerList} from './FilterBySharesTickerList'
import '../Filter.css'

export const FilterBySharesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'shares/watchlist'

    let tickerLists = ['Лист. набл.']

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterBySharesTickerList key={index} tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
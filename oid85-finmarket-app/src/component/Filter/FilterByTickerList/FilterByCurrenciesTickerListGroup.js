import React from 'react'
import {FilterByCurrenciesTickerList} from './FilterByCurrenciesTickerList'
import '../Filter.css'

export const FilterByCurrenciesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'currencies/watchlist'

    let tickerLists = ['Лист. набл.']

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByCurrenciesTickerList key={index} tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
import React from 'react'
import {FilterByBondsTickerList} from './FilterByBondsTickerList'
import '../Filter.css'

export const FilterByBondsTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'bonds/watchlist'

    let tickerLists = ['Лист. набл.']

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByBondsTickerList key={index} tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
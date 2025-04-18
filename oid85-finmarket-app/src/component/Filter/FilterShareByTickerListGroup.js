import React from 'react'
import {FilterBySharesTickerList} from './FilterBySharesTickerList'
import './Filter.css'

export const FilterShareByTickerListGroup = () => {

    let tickerLists = ["all"]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterBySharesTickerList key={index} tickerList={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
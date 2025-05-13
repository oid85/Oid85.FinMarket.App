import React from 'react'
import {FilterByBondsTickerList} from './FilterByBondsTickerList'
import '../Filter.css'

export const FilterByBondsTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'bonds/watchlist'
    dict['КОРПОРАТ'] = 'bonds/corp'
    dict['ЕЖЕМЕС'] = 'bonds/couponEveryMonth'
    dict['МУНИЦ'] = 'bonds/municipals'
    dict['ОФЗ'] = 'bonds/ofz'
    dict['ДЛИН ОФЗ'] = 'bonds/longOfz'
    dict['ПОРТФЕЛЬ'] = 'bonds/portfolio'
    dict['ЗАМЕЩ'] = 'bonds/replacement'

    let tickerLists = [
        'НАБЛЮД',
        'КОРПОРАТ',
        'ЕЖЕМЕС',
        'МУНИЦ',
        'ОФЗ',
        'ДЛИН ОФЗ',
        'ПОРТФЕЛЬ',
        'ЗАМЕЩ'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterByBondsTickerList
                            key={index}
                            tickerListName={item}
                            tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
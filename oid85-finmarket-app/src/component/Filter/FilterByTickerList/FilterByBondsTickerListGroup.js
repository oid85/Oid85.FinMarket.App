import React from 'react'
import {FilterByBondsTickerList} from './FilterByBondsTickerList'
import '../Filter.css'

export const FilterByBondsTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'bonds/watchlist'
    dict['Корп.'] = 'bonds/corp'
    dict['Ежемес. купон'] = 'bonds/coupon_every_month'
    dict['Муниц.'] = 'bonds/municipals'
    dict['ОФЗ'] = 'bonds/ofz'
    dict['Портфель'] = 'bonds/portfolio'
    dict['Замещ.'] = 'bonds/replacement'

    let tickerLists = [
        'Лист. набл.',
        'Корп.',
        'Ежемес. купон',
        'Муниц.',
        'ОФЗ',
        'Портфель',
        'Замещ.'
    ]

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
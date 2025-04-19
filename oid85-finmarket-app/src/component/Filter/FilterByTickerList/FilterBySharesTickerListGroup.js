import React from 'react'
import {FilterBySharesTickerList} from './FilterBySharesTickerList'
import '../Filter.css'

export const FilterBySharesTickerListGroup = () => {

    let dict = {};

    dict['Лист. набл.'] = 'shares/watchlist'
    dict['Эшелон 1'] = 'shares/echelons/echelon_1'
    dict['Эшелон 2'] = 'shares/echelons/echelon_2'
    dict['Эшелон 3'] = 'shares/echelons/echelon_3'
    dict['Банки'] = 'shares/sectors/banks'
    dict['Эл. сети'] = 'shares/sectors/electricity_networks'
    dict['Эн. ген.'] = 'shares/sectors/energy_generation'
    dict['Финансы'] = 'shares/sectors/finance'
    dict['ЖКХ'] = 'shares/sectors/housing_and_utilities'
    dict['Чер. мет.'] = 'shares/sectors/iron_and_steel_industry'
    dict['ИТ'] = 'shares/sectors/it'
    dict['Горнодобыча'] = 'shares/sectors/mining'
    dict['Цв. мет.'] = 'shares/sectors/non_ferrous_metallurgy'
    dict['Нефтегаз'] = 'shares/sectors/oil_and_gas'
    dict['Ретэйл'] = 'shares/sectors/retail'
    dict['Телекомы'] = 'shares/sectors/telecom'
    dict['Экспортеры'] = 'shares/exporters'
    dict['IMOEX'] = 'shares/imoex'
    dict['Сырье'] = 'shares/materials'
    dict['Портфель'] = 'shares/portfolio'

    let tickerLists = [
        'Лист. набл.',
        'Эшелон 1',
        'Эшелон 2',
        'Эшелон 3',
        'Банки',
        'Эл. сети',
        'Эн. ген.',
        'Финансы',
        'ЖКХ',
        'Чер. мет.',
        'ИТ',
        'Горнодобыча',
        'Цв. мет.',
        'Нефтегаз',
        'Ретэйл',
        'Телекомы',
        'Экспортеры',
        'IMOEX',
        'Сырье',
        'Портфель'
    ]

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
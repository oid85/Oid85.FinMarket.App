import React from 'react'
import {FilterBySharesTickerList} from './FilterBySharesTickerList'
import '../Filter.css'

export const FilterBySharesTickerListGroup = () => {

    let dict = {};

    dict['НАБЛЮД'] = 'shares/watchlist'
    dict['ЭШЕЛОН1'] = 'shares/echelons/echelon1'
    dict['ЭШЕЛОН2'] = 'shares/echelons/echelon2'
    dict['ЭШЕЛОН3'] = 'shares/echelons/echelon3'
    dict['БАНКИ'] = 'shares/sectors/banks'
    dict['ЭНЕРГ'] = 'shares/sectors/energ'
    dict['ФИН'] = 'shares/sectors/finance'
    dict['ЖКХ'] = 'shares/sectors/housingAndUtilities'
    dict['ЧЕРМЕТ'] = 'shares/sectors/ironAndSteelIndustry'
    dict['ИТ'] = 'shares/sectors/it'
    dict['ГОРДОБ'] = 'shares/sectors/mining'
    dict['ЦВМЕТ'] = 'shares/sectors/nonFerrousMetallurgy'
    dict['НЕФТЕГАЗ'] = 'shares/sectors/oilAndGas'
    dict['РЕТЭЙЛ'] = 'shares/sectors/retail'
    dict['ТЕЛЕКОМ'] = 'shares/sectors/telecom'
    dict['ЭКСПОРТ'] = 'shares/exporters'
    dict['IMOEX'] = 'shares/imoex'
    dict['СЫРЬЕ'] = 'shares/materials'
    dict['ПОРТФЕЛЬ'] = 'shares/portfolio'
    dict['РОССЕТИ'] = 'shares/rosseti'

    let tickerLists = [
        'НАБЛЮД',
        'ЭШЕЛОН1',
        'ЭШЕЛОН2',
        'ЭШЕЛОН3',
        'БАНКИ',
        'ЭНЕРГ',
        'ФИН',
        'ЖКХ',
        'ЧЕРМЕТ',
        'ИТ',
        'ГОРДОБ',
        'ЦВМЕТ',
        'НЕФТЕГАЗ',
        'РЕТЭЙЛ',
        'ТЕЛЕКОМ',
        'ЭКСПОРТ',
        'IMOEX',
        'СЫРЬЕ',
        'ПОРТФЕЛЬ',
        'РОССЕТИ'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    tickerLists.map((item, index) => (
                        <FilterBySharesTickerList
                            key={index}
                            tickerListName={item}
                            tickerList={dict[item]} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
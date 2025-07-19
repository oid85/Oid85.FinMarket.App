import React from 'react'
import {FilterByBacktestResultStrategyName} from './FilterByBacktestResultStrategyName'
import '../Filter.css'

export const FilterByBacktestResultStrategyNameGroup = () => {
    
    let strategyNames = [
        'SupertrendLong',
        'SupertrendShort'
    ]

    return (
        <React.Fragment>
            <div className='filter-container'>
                {
                    strategyNames.map((item, index) => (
                        <FilterByBacktestResultStrategyName key={index} days={item} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
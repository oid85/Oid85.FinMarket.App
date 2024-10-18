import React from 'react'
import {FilterByLastDay7} from './FilterByLastDay7'
import {FilterByLastDay30} from './FilterByLastDay30'
import {FilterByLastDay90} from './FilterByLastDay90'
import {FilterByLastDay180} from './FilterByLastDay180'
import {FilterByLastDay365} from './FilterByLastDay365'
import {FilterByTicker} from './FilterByTicker'

export const FilterStock = () => {
    
    return (
        <React.Fragment>
                <div
                    style={{
                            margin: 5
                    }}>
                        <h6>Выбрать</h6>
                        <FilterByLastDay7 />
                        <FilterByLastDay30 />
                        <FilterByLastDay90 />
                        <FilterByLastDay180 />
                        <FilterByLastDay365 />
                        <br />
                        <FilterByTicker />
                </div>
        </React.Fragment>
    )
}
import React from 'react'
import {FilterByLastDay7} from "./FilterByLastDay7"
import {FilterByLastDay30} from "./FilterByLastDay30"
import {FilterByLastDay90} from "./FilterByLastDay90"
import {FilterByLastDay180} from "./FilterByLastDay180"
import {FilterByLastDay365} from "./FilterByLastDay365"
import {FilterByAllStocks} from "./FilterByAllStocks"
import {FilterByMoexIndex} from "./FilterByMoexIndex"
import {FilterByPortfolio} from "./FilterByPortfolio"
import {FilterByWatchList} from "./FilterByWatchList"

export const Filter = () => {
    
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
                        <FilterByAllStocks />
                        <FilterByMoexIndex />
                        <FilterByPortfolio />
                        <FilterByWatchList />
                </div>
        </React.Fragment>
    )
}
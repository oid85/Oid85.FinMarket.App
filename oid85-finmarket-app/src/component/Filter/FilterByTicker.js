import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useSelector} from 'react-redux'
import { FilterTickerButton } from './FilterTickerButton'
import Loader from '../Loader/Loader'
import './Filter.css'

export const FilterByTicker = () => {

    const loading = useSelector(state => state.app.loading)
    const watchListData = useSelector(state => state.filter.watchListData)

    return (
        <React.Fragment>
            {
                !watchListData.result || loading
                ? <Loader/>
                :  
                <div className='filter-container'>
                {watchListData.result.map((item, key) => (
                <FilterTickerButton 
                    key={key} 
                    ticker={item.ticker} />
                ))}
            </div>
            }
        </React.Fragment>
    )
}
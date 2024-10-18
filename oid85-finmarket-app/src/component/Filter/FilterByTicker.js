import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch, useSelector} from 'react-redux'
import {sagaWatchListTickers, setTicker} from '../../redux/actions/filterActions'
import Loader from '../Loader/Loader'

export const FilterByTicker = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const watchListData = useSelector(state => state.filter.watchListData)   

    useEffect(() => {
        dispatch(sagaWatchListTickers())
    }, )

    console.log(watchListData.result)

    return (
        <React.Fragment>
            {
                !watchListData.result || loading
                ? <Loader/>
                : 
                <div>
                    qwe
                </div>
            }
        </React.Fragment>
    )
}
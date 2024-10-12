import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Loader from '../Loader/Loader'
import { Filter } from '../Filter/Filter'
import './Report.css'

export const Report = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.tickerList)

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [tickerList])    
    
    return (
        <React.Fragment>
            {
                loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <div>
                            <Filter/>
                        </div>
                        <div className='table-container'>
                            {reportData}                    
                        </div>
                    </div>                    
            }
        </React.Fragment>
    )
}
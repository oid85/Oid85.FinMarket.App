import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { FilterMarket } from '../Filter/FilterMarket'
import { sagaReportCandleVolume } from '../../redux/actions/reportActions'
import './Report.css'
import { Table } from './Table'

export const ReportCandleVolume = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.tickerList)

    useEffect(() => {
        dispatch(sagaReportCandleVolume())
    }, [])

    useEffect(() => {
        dispatch(sagaReportCandleVolume())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportCandleVolume())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportCandleVolume())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterMarket />
                        <Table 
                            title = {`${reportData.result.title}: ${startDate} - ${endDate}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
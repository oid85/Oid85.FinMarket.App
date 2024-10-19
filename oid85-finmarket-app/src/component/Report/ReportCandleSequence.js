import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { FilterMarket } from '../Filter/FilterMarket'
import { sagaReportCandleSequence } from '../../redux/actions/reportActions'
import './Report.css'
import { ReportTable } from './ReportTable'

export const ReportCandleSequence = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.tickerList)

    useEffect(() => {
        dispatch(sagaReportCandleSequence())
    }, [])

    useEffect(() => {
        dispatch(sagaReportCandleSequence())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportCandleSequence())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportCandleSequence())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterMarket />
                        <ReportTable 
                            title = {`${reportData.result.title}: ${startDate} - ${endDate}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
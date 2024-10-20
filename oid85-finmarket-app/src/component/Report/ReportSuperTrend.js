import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { FilterMarket } from '../Filter/FilterMarket'
import { sagaReportSuperTrend } from '../../redux/actions/reportActions'
import './Report.css'
import { Table } from './Table'

export const ReportSuperTrend = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.tickerList)

    useEffect(() => {
        dispatch(sagaReportSuperTrend())
    }, [])

    useEffect(() => {
        dispatch(sagaReportSuperTrend())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportSuperTrend())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportSuperTrend())
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
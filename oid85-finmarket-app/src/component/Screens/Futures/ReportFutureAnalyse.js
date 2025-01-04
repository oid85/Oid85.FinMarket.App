import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportFutureAnalyse, sagaFuturesWatchListTickers} from '../../../redux/actions/reportFuturesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByLastDaysGroup } from '../../Filter/FilterByLastDaysGroup'

export const ReportFutureAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportFutures.reportData)
    const watchListTickers = useSelector(state => state.reportFutures.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaFuturesWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportFutureAnalyse())
    }, [])

    useEffect(() => {
        dispatch(sagaReportFutureAnalyse())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportFutureAnalyse())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportFutureAnalyse())
    }, [ticker])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup/>
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
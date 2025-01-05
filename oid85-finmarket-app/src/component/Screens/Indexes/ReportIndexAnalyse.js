import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaIndexesWatchListTickers, sagaReportIndexAnalyse} from '../../../redux/actions/reportIndexesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByLastDaysGroup } from '../../Filter/FilterByLastDaysGroup'
import {FilterByTickerGroup} from '../../Filter/FilterByTickerGroup'

export const ReportIndexAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexes.reportData)
    const watchListTickers = useSelector(state => state.reportIndexes.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaIndexesWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexAnalyse())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexAnalyse())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportIndexAnalyse())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportIndexAnalyse())
    }, [ticker])

    return (
        <React.Fragment>
            {
                !reportData.result || !watchListTickers.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <FilterByTickerGroup
                            tickers = {watchListTickers.result} />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
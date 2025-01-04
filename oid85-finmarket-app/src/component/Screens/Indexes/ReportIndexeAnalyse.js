import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportIndexAnalyse, sagaIndexsWatchListTickers} from '../../../redux/actions/reportIndexsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByLastDaysGroup } from '../../Filter/FilterByLastDaysGroup'

export const ReportIndexAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexs.reportData)
    const watchListTickers = useSelector(state => state.reportIndexs.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaIndexsWatchListTickers())
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
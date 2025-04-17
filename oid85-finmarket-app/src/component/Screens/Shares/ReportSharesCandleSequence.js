import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportSharesCandleSequence, sagaReportSharesYieldLtm} from '../../../redux/actions/reportSharesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterShareByTickerListGroup} from "../../Filter/FilterShareByTickerListGroup"

export const ReportSharesCandleSequence = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.sharesTickerList)

    useEffect(() => {
        dispatch(sagaReportSharesCandleSequence())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaReportSharesCandleSequence())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportSharesCandleSequence())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportSharesYieldLtm())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <FilterShareByTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
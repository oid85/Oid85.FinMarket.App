import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportIndexesCandleSequence } from '../../../redux/actions/reportIndexesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterByIndexesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByIndexesTickerListGroup";

export const ReportIndexesCandleSequence = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexes.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.indexesTickerList)

    useEffect(() => {
        dispatch(sagaReportIndexesCandleSequence())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexesCandleSequence())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportIndexesCandleSequence())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportIndexesCandleSequence())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <FilterByIndexesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
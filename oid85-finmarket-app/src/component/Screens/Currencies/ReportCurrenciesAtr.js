import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportCurrenciesAtr } from '../../../redux/actions/reportCurrenciesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment"
import {CONSTANTS} from "../../../constants"
import {FilterByCurrenciesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByCurrenciesTickerListGroup";

export const ReportCurrenciesAtr = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportCurrencies.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.currenciesTickerList)

    useEffect(() => {
        dispatch(sagaReportCurrenciesAtr())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaReportCurrenciesAtr())
    }, [startDate, endDate, tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <FilterByCurrenciesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
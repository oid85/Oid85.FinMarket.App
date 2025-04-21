import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportCurrenciesMarketEvent } from '../../../redux/actions/reportCurrenciesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByCurrenciesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByCurrenciesTickerListGroup";

export const ReportCurrenciesMarketEvent = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportCurrencies.reportData)
    const tickerList = useSelector(state => state.filter.currenciesTickerList)

    useEffect(() => {
        dispatch(sagaReportCurrenciesMarketEvent())
    }, [])

    useEffect(() => {
        dispatch(sagaReportCurrenciesMarketEvent())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByCurrenciesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
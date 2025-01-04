import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportIndexsCandleVolume, sagaIndexsWatchListTickers} from '../../../redux/actions/reportIndexsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from "../../Filter/FilterByLastDaysGroup";

export const ReportIndexsCandleVolume = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexs.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)

    useEffect(() => {
        dispatch(sagaIndexsWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexsCandleVolume())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexsCandleVolume())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportIndexsCandleVolume())
    }, [endDate])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <Table 
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
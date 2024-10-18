import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { sagaReportStock } from '../../redux/actions/reportActions'
import './Report.css'
import { ReportTable } from './ReportTable'
import { FilterStock } from '../Filter/FilterStock'

export const ReportStock = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaReportStock())
    }, [])

    useEffect(() => {
        dispatch(sagaReportStock())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportStock())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportStock())
    }, [ticker])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterStock/>
                        <ReportTable 
                            title = {`${reportData.result.title}: ${startDate} - ${endDate}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}
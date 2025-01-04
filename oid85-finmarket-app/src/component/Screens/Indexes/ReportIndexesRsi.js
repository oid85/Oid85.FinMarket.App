import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportIndexsRsi } from '../../../redux/actions/reportIndexsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from "../../Filter/FilterByLastDaysGroup";

export const ReportIndexsRsi = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexs.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)

    useEffect(() => {
        dispatch(sagaReportIndexsRsi())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexsRsi())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportIndexsRsi())
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
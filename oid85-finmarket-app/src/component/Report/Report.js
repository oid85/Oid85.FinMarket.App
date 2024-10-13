import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { Filter } from '../Filter/Filter'
import { sagaGetReport } from '../../redux/actions/reportActions'
import './Report.css'
import { ReportTableRow } from './ReportTableRow'

export const Report = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.tickerList)

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaGetReport())
    }, [tickerList])

    console.log(reportData.result)

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <div>
                            <Filter/>
                        </div>
                        <div>
                            <div>
                                <h6>{reportData.result.title}: {startDate} - {endDate}</h6>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        {reportData.result.header.map((head, headId) => (
                                            <th key={headId}></th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportData.result.data.map((rowValue) => (
                                        <ReportTableRow rowValue = {rowValue} />
                                    ))} 
                                </tbody>
                            </table>                        
                        </div>
                    </div>                    
            }
        </React.Fragment>
    )
}
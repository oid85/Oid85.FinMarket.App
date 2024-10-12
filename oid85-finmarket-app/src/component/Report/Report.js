import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { Filter } from '../Filter/Filter'
import { sagaGetReport } from '../../redux/actions/reportActions'
import './Report.css'

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
                loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <div>
                            <Filter/>
                        </div>
                        <div className='table-container'>                             
                        <table>
                                <thead>
                                    <tr>
                                        {reportData.result.header.map((head, headId) => (
                                            <th key={headId}></th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportData.result.data.map((rowContent, rowId) => (
                                        <tr>{rowContent.map((val, rowId) => (
                                            <td key={rowId}>{val}</td>
                                        ))}</tr>
                                    ))} 
                                </tbody>
                            </table>                        
                        </div>
                    </div>                    
            }
        </React.Fragment>
    )
}
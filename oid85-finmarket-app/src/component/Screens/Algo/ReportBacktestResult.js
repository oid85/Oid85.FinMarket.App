import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaAlgoBacktestResult } from '../../../redux/actions/algoActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const ReportBacktestResult = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultId = useSelector(state => state.algo.backtestResultId)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResult())
    }, [])

    return (
        <React.Fragment>
            {
                !backtestResultId || loading
                    ? <Loader/>
                    :                    
                    <div>
                        {backtestResultId}
                    </div>                    
            }
        </React.Fragment>
    )
}
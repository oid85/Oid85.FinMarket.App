import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaAlgoBacktestResultByTicker} from '../../../redux/actions/algoActions'
import './BacktestResult.css'
import {BacktestResultDiagram} from "../../Diagram/BacktestResultDiagram";
import {Table} from "../../Report/Table";

export const ReportBacktestResultByTicker = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.algo.backtestResultData)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResultByTicker())
    }, [])

    console.log(backtestResultData)

    return (
        <React.Fragment>
            {
                !backtestResultData || loading
                    ? <Loader/>
                    :
                    <div className='backtest-result-container'>
                        <BacktestResultDiagram data = {{...{...{...backtestResultData.result}.diagramData}.data}.series} />
                    </div>
            }
        </React.Fragment>
    )
}
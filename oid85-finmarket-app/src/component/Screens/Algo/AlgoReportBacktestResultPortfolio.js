import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaAlgoBacktestResultPortfolio} from '../../../redux/actions/algoActions'
import './AlgoBacktestResult.css'
import {BacktestResultPortfolioDiagram} from "../../Diagram/BacktestResultPortfolioDiagram";

export const AlgoReportBacktestResultPortfolio = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.algo.backtestResultData)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResultPortfolio())
    }, [])

    return (
        <React.Fragment>
            {
                !backtestResultData || loading
                    ? <Loader/>
                    :
                    <div className='backtest-result-container'>
                        <BacktestResultPortfolioDiagram data = {{...{...{...backtestResultData.result}.diagramData}.data}.series} />
                    </div>
            }
        </React.Fragment>
    )
}
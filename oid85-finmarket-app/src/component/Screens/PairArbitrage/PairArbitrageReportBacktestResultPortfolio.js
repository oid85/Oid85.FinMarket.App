import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaPairArbitrageBacktestResultPortfolio} from '../../../redux/actions/pairArbitrageActions'
import './PairArbitrageBacktestResult.css'
import {BacktestResultPortfolioDiagram} from "../../Diagram/BacktestResultPortfolioDiagram";

export const PairArbitrageReportBacktestResultPortfolio = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.pairArbitrage.backtestResultData)

    useEffect(() => {
        dispatch(sagaPairArbitrageBacktestResultPortfolio())
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
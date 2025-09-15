import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaPairArbitrageBacktestResultByTicker} from '../../../redux/actions/pairArbitrageActions'
import './PairArbitrageBacktestResult.css'
import {PairArbitrageBacktestResultDiagram} from "../../Diagram/PairArbitrageBacktestResultDiagram";

export const PairArbitrageReportBacktestResultByTicker = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.pairArbitrage.backtestResultData)

    useEffect(() => {
        dispatch(sagaPairArbitrageBacktestResultByTicker())
    }, [])

    console.log(backtestResultData)

    return (
        <React.Fragment>
            {
                !backtestResultData || loading
                    ? <Loader/>
                    :
                    <div className='backtest-result-container'>
                        <h3>{{...{...backtestResultData.result}.diagramData}.title}</h3>
                        <PairArbitrageBacktestResultDiagram data={{...{...{...backtestResultData.result}.diagramData}.data}.series}/>
                    </div>
            }
        </React.Fragment>
    )
}
import React from 'react'
import './Icon.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBacktestResultTicker} from "../../redux/actions/filterActions";

export const BacktestResultByTickerButtonSymbol = ({value, color}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    return (
        <div style={{backgroundColor: color}}>
            <button
                style={{width: 28, height: 28}}
                key={value}
                className='btn btn-outline-primary'
                onClick={() => {
                    dispatch(setBacktestResultTicker(value))
                    navigate("/backtest-result-by-ticker")
                }}
            >...</button>
        </div>
    )
}
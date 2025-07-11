import React from 'react'
import './Icon.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBacktestResultId} from "../../redux/actions/filterActions";

export const BacktestResultByIdButtonSymbol = ({value, color}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    return (
        <div style={{backgroundColor: color}}>
            <button
                style={{width: 28, height: 28}}
                key={value}
                className='btn btn-outline-primary'
                onClick={() => {
                    dispatch(setBacktestResultId(value))
                    navigate("/backtest-result-by-id")
                }}
            >...</button>
        </div>
    )
}
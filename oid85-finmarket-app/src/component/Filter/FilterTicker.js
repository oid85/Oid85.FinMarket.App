import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setTicker} from '../../redux/actions/filterActions'

export const FilterTicker = ({key, ticker}) => {

    const dispatch = useDispatch()  

    return (
        <React.Fragment>
            <div>
                <button
                style={{
                    width: 70,
                    margin: 1
                }}
                key={key}
                className='btn btn-outline-primary'
                onClick={() => {
                    dispatch(setTicker(ticker))
                }}>{ticker}</button>
            </div>
        </React.Fragment>
    )
}
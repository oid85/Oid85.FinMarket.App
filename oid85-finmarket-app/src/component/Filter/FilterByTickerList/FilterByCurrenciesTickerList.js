import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setCurrenciesTickerList} from '../../../redux/actions/filterActions'

export const FilterByCurrenciesTickerList = ({key, tickerListName, tickerList}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        width: 80,
                        margin: 1,
                        fontSize: 10
                    }}
                    key={key}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setCurrenciesTickerList(tickerList))
                    }}
                >{tickerListName}</button>
            </div>
        </React.Fragment>
    )
}

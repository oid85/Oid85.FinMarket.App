import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from "react-redux";
import {setTickerList} from "../../redux/actions/filterActions";
import { CONSTANTS } from '../../constants';

export const FilterByMoexIndex = () => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        margin: 5,
                        width: 100
                    }}
                    className="btn btn-outline-primary"
                    onClick={() => {
                        dispatch(setTickerList(CONSTANTS.TICKER_LIST_MOEX_INDEX))
                    }}
                >Индекс Мосбиржи</button>
            </div>

        </React.Fragment>
    )
}
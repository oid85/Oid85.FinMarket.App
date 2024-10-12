import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from "react-redux";
import {setEndDate, setStartDate} from "../../redux/actions/filterActions";

export const FilterByLastDay30 = () => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        margin: 5,
                        width: 250
                    }}
                    className="btn btn-outline-primary"
                    onClick={() => {
                        dispatch(setStartDate(moment()
                            .subtract(29, "days")
                            .format("YYYY-MM-DD")
                            .toString()))
                        dispatch(setEndDate(moment()
                            .format("YYYY-MM-DD")
                            .toString()))
                    }}
                >Последние 30 дней</button>
            </div>

        </React.Fragment>
    )
}
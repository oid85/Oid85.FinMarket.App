import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from "react-redux";
import {setEndDate, setStartDate} from "../../redux/actions/filterActions";

export const FilterByLastDay365 = () => {

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
                        dispatch(setStartDate(moment()
                            .subtract(364, "days")
                            .format("YYYY-MM-DD")
                            .toString()))
                        dispatch(setEndDate(moment()
                            .format("YYYY-MM-DD")
                            .toString()))
                    }}
                >365 дней</button>
            </div>

        </React.Fragment>
    )
}
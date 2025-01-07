import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportFuturesSupertrend} from "./ReportFuturesSupertrend";
import {ReportFuturesCandleSequence} from "./ReportSharesCandleSequence";
import {ReportFuturesCandleVolume} from "./ReportSharesCandleVolume";
import {ReportFuturesRsi} from "./ReportSharesRsi";
import {ReportFuturesSpred} from "./ReportFuturesSpred";
import {ReportFuturesYieldLtm} from "./ReportSharesYieldLtm";

export const FuturesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                    <Tab>CandleSequence</Tab>
                    <Tab>CandleVolume</Tab>
                    <Tab>Rsi</Tab>
                    <Tab>Spred</Tab>
                    <Tab>YieldLtm</Tab>
                </TabList>                
                <TabPanel>
                    <ReportFuturesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesCandleVolume />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesSpred />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesYieldLtm />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

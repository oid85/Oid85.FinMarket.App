import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportFuturesSupertrend} from "./ReportFuturesSupertrend";
import {ReportFuturesCandleSequence} from "./ReportSharesCandleSequence";
import {ReportFuturesCandleVolume} from "./ReportSharesCandleVolume";
import {ReportFuturesRsi} from "./ReportSharesRsi";
import {ReportFuturesSpread} from "./ReportFuturesSpread";
import {ReportFuturesYieldLtm} from "./ReportSharesYieldLtm";
import {ReportFuturesAggregatedAnalyse} from "./ReportFuturesAggregatedAnalyse";
import {ReportFuturesMarketEvent} from "./ReportFuturesMarketEvent";

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
                    <Tab>Spread</Tab>
                    <Tab>YieldLtm</Tab>
                    <Tab>AggregatedAnalyse</Tab>
                    <Tab>MarketEvents</Tab>
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
                    <ReportFuturesSpread />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

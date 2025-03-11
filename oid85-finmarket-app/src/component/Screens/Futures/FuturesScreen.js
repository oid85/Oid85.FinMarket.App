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
                    <Tab>Агрегация</Tab>
                    <Tab>Тренд</Tab>
                    <Tab>Свечи</Tab>
                    <Tab>Рост объема</Tab>
                    <Tab>RSI</Tab>
                    <Tab>Спреды</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>События</Tab>
                </TabList>
                <TabPanel>
                    <ReportFuturesAggregatedAnalyse />
                </TabPanel>
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
                    <ReportFuturesMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportFuturesSupertrend} from "./ReportFuturesSupertrend"
import {ReportFuturesCandleSequence} from "./ReportFuturesCandleSequence"
import {ReportFuturesCandleVolume} from "./ReportFuturesCandleVolume"
import {ReportFuturesRsi} from "./ReportFuturesRsi"
import {ReportFuturesSpread} from "./ReportFuturesSpread"
import {ReportFuturesYieldLtm} from "./ReportFuturesYieldLtm"
import {ReportFuturesAggregatedAnalyse} from "./ReportFuturesAggregatedAnalyse"
import {ReportFuturesMarketEvent} from "./ReportFuturesMarketEvent"
import {DiagramFuturesDailyClosePrices} from "./DiagramFuturesDailyClosePrices";

export const FuturesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Импульс объема</Tab>
                    <Tab>Спреды</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>События</Tab>
                    <Tab>Графики (днев)</Tab>
                </TabList>
                <TabPanel>
                    <ReportFuturesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportFuturesCandleVolume />
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
                <TabPanel>
                    <DiagramFuturesDailyClosePrices />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

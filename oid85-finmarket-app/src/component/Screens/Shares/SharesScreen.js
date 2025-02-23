import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportSharesSupertrend} from "./ReportSharesSupertrend";
import {ReportSharesCandleSequence} from "./ReportSharesCandleSequence";
import {ReportSharesCandleVolume} from "./ReportSharesCandleVolume";
import {ReportSharesRsi} from "./ReportSharesRsi";
import {ReportSharesYieldLtm} from "./ReportSharesYieldLtm";
import {ReportSharesDrawdownFromMaximum} from "./ReportSharesDrawdownFromMaximum";
import {ReportSharesDividend} from "./ReportSharesDividend";
import {ReportSharesAssetFundamental} from "./ReportSharesAssetFundamental";
import {ReportSharesMultiplicator} from "./ReportSharesMultiplicator";
import {ReportSharesAggregatedAnalyse} from "./ReportSharesAggregatedAnalyse";
import {ReportSharesForecastTarget} from "./ReportSharesForecastTarget";
import {ReportSharesForecastConsensus} from "./ReportSharesForecastConsensus";

export const SharesScreen = () => {
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
                    <Tab>YieldLtm</Tab>
                    <Tab>DrawdownFromMaximum</Tab>
					<Tab>Dividend</Tab>
                    <Tab>AssetFundamental</Tab>
                    <Tab>Multiplicator</Tab>
                    <Tab>ForecastTarget</Tab>
                    <Tab>ForecastConsensus</Tab>
                    <Tab>AggregatedAnalyse</Tab>
                </TabList>
                <TabPanel>
                    <ReportSharesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleVolume />
                </TabPanel>
                <TabPanel>
                    <ReportSharesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportSharesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportSharesDrawdownFromMaximum />
                </TabPanel>
                <TabPanel>
                    <ReportSharesDividend />
                </TabPanel>
                <TabPanel>
                    <ReportSharesAssetFundamental />
                </TabPanel>
                <TabPanel>
                    <ReportSharesMultiplicator />
                </TabPanel>
                <TabPanel>
                    <ReportSharesForecastTarget />
                </TabPanel>
                <TabPanel>
                    <ReportSharesForecastConsensus />
                </TabPanel>
                <TabPanel>
                    <ReportSharesAggregatedAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

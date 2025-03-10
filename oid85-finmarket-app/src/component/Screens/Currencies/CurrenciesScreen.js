import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportCurrenciesSupertrend} from "./ReportCurrenciesSupertrend";
import {ReportCurrenciesCandleSequence} from "./ReportCurrenciesCandleSequence";
import {ReportCurrenciesRsi} from "./ReportCurrenciesRsi";
import {ReportCurrenciesYieldLtm} from "./ReportCurrenciesYieldLtm";
import {ReportCurrenciesDrawdownFromMaximum} from "./ReportCurrenciesDrawdownFromMaximum";
import {ReportCurrenciesAggregatedAnalyse} from "./ReportCurrenciesAggregatedAnalyse";
import {ReportCurrenciesMarketEvent} from "./ReportCurrenciesMarketEvent";

export const CurrenciesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                    <Tab>CandleSequence</Tab>
                    <Tab>Rsi</Tab>
                    <Tab>YieldLtm</Tab>
                    <Tab>DrawdownFromMaximum</Tab>
                    <Tab>AggregatedAnalyse</Tab>
                    <Tab>MarketEvents</Tab>
                </TabList>
                <TabPanel>
                    <ReportCurrenciesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesDrawdownFromMaximum />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportCurrenciesMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

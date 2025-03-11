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
                    <Tab>Агрегация</Tab>
                    <Tab>Тренд</Tab>
                    <Tab>Свечи</Tab>
                    <Tab>RSI</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>Падение от макс.</Tab>
                    <Tab>События</Tab>
                </TabList>
                <TabPanel>
                    <ReportCurrenciesAggregatedAnalyse />
                </TabPanel>
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
                    <ReportCurrenciesMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

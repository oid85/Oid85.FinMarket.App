import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportStrategySignals} from "./ReportStrategySignals";
import {ReportBacktestResults} from "./ReportBacktestResults";
import {ReportBacktestResultPortfolio} from "./ReportBacktestResultPortfolio";

export const AlgoScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Сигналы</Tab>
                    <Tab>Результаты бэктеста</Tab>
                    <Tab>Бэктест портфеля стратегий</Tab>
                </TabList>
                <TabPanel>
                    <ReportStrategySignals />
                </TabPanel>
                <TabPanel>
                    <ReportBacktestResults />
                </TabPanel>
                <TabPanel>
                    <ReportBacktestResultPortfolio />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

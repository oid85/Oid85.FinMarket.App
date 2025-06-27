import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportStrategySignals} from "./ReportStrategySignals";
import {ReportBacktestResults} from "./ReportBacktestResults";

export const AlgoScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Сигналы</Tab>
                    <Tab>Результаты бэктеста</Tab>
                </TabList>
                <TabPanel>
                    <ReportStrategySignals />
                </TabPanel>
                <TabPanel>
                    <ReportBacktestResults />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

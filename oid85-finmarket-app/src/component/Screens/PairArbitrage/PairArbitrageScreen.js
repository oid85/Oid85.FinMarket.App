import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {PairArbitrageDiagramSpreads} from "./PairArbitrageDiagramSpreads";
import {PairArbitrageReportStrategySignals} from "./PairArbitrageReportStrategySignals";
import {PairArbitrageReportBacktestResults} from "./PairArbitrageReportBacktestResults";
import {PairArbitrageReportBacktestResultPortfolio} from "./PairArbitrageReportBacktestResultPortfolio";

export const PairArbitrageScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Графики спредов</Tab>
                    <Tab>Сигналы</Tab>
                    <Tab>Результаты бэктеста</Tab>
                    <Tab>Бэктест портфеля стратегий</Tab>
                </TabList>
                <TabPanel>
                    <PairArbitrageDiagramSpreads />
                </TabPanel>
                <TabPanel>
                    <PairArbitrageReportStrategySignals />
                </TabPanel>
                <TabPanel>
                    <PairArbitrageReportBacktestResults />
                </TabPanel>
                <TabPanel>
                    <PairArbitrageReportBacktestResultPortfolio />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

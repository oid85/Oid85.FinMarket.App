import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportCurrenciesSuperTrend } from './ReportCurrenciesSuperTrend'
import { ReportCurrenciesCandleSequence } from './ReportCurrenciesCandleSequence'
import { ReportCurrenciesCandleVolume } from './ReportCurrenciesCandleVolume'
import { ReportCurrenciesRsi } from './ReportCurrenciesRsi'
import {ReportCurrencyAnalyse} from "./ReportCurrencyAnalyse";

export const CurrenciesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Тренд</Tab>
                    <Tab>Свечи</Tab>
                    <Tab>Объем</Tab>
                    <Tab>RSI</Tab>
                    <Tab>Сводный</Tab>
                </TabList>                
                <TabPanel>
                    <ReportCurrenciesSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportCurrenciesCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportCurrenciesCandleVolume />
                </TabPanel> 
                <TabPanel>
                    <ReportCurrenciesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportCurrencyAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

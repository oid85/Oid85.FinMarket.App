import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportFuturesSuperTrend } from './ReportFuturesSuperTrend'
import { ReportFuturesCandleSequence } from './ReportFuturesCandleSequence'
import { ReportFuturesCandleVolume } from './ReportFuturesCandleVolume'
import { ReportFuturesRsi } from './ReportFuturesRsi'
import {ReportFutureAnalyse} from './ReportFutureAnalyse'

export const FuturesScreen = () => {
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
                    <ReportFuturesSuperTrend />
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
                    <ReportFutureAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

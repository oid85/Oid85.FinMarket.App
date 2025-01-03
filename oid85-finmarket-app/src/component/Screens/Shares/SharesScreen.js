import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportSharesSuperTrend } from './ReportSharesSuperTrend'
import { ReportSharesCandleSequence } from './ReportSharesCandleSequence'
import { ReportSharesCandleVolume } from './ReportSharesCandleVolume'
import { ReportSharesRsi } from './ReportSharesRsi'
import {ReportDividends} from "./ReportDividends";

export const SharesScreen = () => {
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
                    <Tab>Дивиденды</Tab>
                </TabList>                
                <TabPanel>
                    <ReportSharesSuperTrend />
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
                    <ReportDividends />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

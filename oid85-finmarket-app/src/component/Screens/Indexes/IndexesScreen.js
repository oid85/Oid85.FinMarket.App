import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportIndexsSuperTrend } from './ReportIndexsSuperTrend'
import { ReportIndexsCandleSequence } from './ReportIndexsCandleSequence'
import { ReportIndexsCandleVolume } from './ReportIndexsCandleVolume'
import { ReportIndexsRsi } from './ReportIndexsRsi'
import {ReportIndexAnalyse} from "./ReportIndexAnalyse";

export const IndexesScreen = () => {
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
                    <ReportIndexsSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportIndexsCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportIndexsCandleVolume />
                </TabPanel> 
                <TabPanel>
                    <ReportIndexsRsi />
                </TabPanel>
                <TabPanel>
                    <ReportIndexAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

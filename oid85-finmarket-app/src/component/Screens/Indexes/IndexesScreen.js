import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportIndexesSuperTrend } from './ReportIndexesSuperTrend'
import { ReportIndexesCandleSequence } from './ReportIndexesCandleSequence'
import { ReportIndexesCandleVolume } from './ReportIndexesCandleVolume'
import { ReportIndexesRsi } from './ReportIndexesRsi'
import {ReportIndexAnalyse} from './ReportIndexAnalyse'

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
                    <ReportIndexesSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportIndexesCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportIndexesCandleVolume />
                </TabPanel> 
                <TabPanel>
                    <ReportIndexesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportIndexAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

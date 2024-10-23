import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ReportSuperTrend } from '../Report/ReportSuperTrend'
import { ReportCandleSequence } from '../Report/ReportCandleSequence'
import { ReportCandleVolume } from '../Report/ReportCandleVolume'
import { ReportRsi } from '../Report/ReportRsi'

export const TechAnalyse = () => {
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
                </TabList>                
                <TabPanel>
                    <ReportSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportCandleVolume />
                </TabPanel> 
                <TabPanel>
                    <ReportRsi />
                </TabPanel>                                                                     
            </Tabs>
        </React.Fragment>
    )    
}

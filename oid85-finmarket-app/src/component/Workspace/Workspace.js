import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ReportSuperTrend } from '../Report/ReportSuperTrend'
import { ReportCandleSequence } from '../Report/ReportCandleSequence'
import { ReportStock } from '../Report/ReportStock'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Тренд</Tab>
                    <Tab>Свечи</Tab>
                    <Tab>Акция</Tab>
                </TabList>                
                <TabPanel>
                    <ReportSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportStock />
                </TabPanel>                                         
            </Tabs>
        </React.Fragment>
    )    
}

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ReportSuperTrend } from '../Report/ReportSuperTrend'
import { ReportCandleSequence } from '../Report/ReportCandleSequence'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Супертренд</Tab>
                    <Tab>Свечи подряд</Tab>
                </TabList>                
                <TabPanel>
                    <ReportSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportCandleSequence />
                </TabPanel>                          
            </Tabs>
        </React.Fragment>
    )    
}

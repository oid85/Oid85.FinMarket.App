import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportSharesAggregatedAnalyse } from './ReportSharesAggregatedAnalyse'

export const SharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Aggregated</Tab>
                </TabList>                
                <TabPanel>
                    <ReportSharesAggregatedAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

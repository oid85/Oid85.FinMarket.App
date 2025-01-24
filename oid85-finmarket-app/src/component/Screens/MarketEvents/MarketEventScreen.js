import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportMarketEvent} from "./ReportMarketEvent";

export const MarketEventScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>MarketEvent</Tab>
                </TabList>
                <TabPanel>
                    <ReportMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

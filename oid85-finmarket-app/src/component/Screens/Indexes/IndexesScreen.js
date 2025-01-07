import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportIndexesSupertrend} from "./ReportIndexesSupertrend";

export const IndexesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                </TabList>                
                <TabPanel>
                    <ReportIndexesSupertrend />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

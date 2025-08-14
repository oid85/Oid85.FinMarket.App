import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {DiagramSpreads} from "./DiagramSpreads";

export const StatisticalArbitrageScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Графики спредов</Tab>
                </TabList>
                <TabPanel>
                    <DiagramSpreads />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

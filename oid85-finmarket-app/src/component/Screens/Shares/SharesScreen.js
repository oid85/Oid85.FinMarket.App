import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportSharesSupertrend} from "./ReportSharesSupertrend";
import {ReportSharesCandleSequence} from "./ReportSharesCandleSequence";
import {ReportSharesCandleVolume} from "./ReportSharesCandleVolume";

export const SharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                    <Tab>CandleSequence</Tab>
                    <Tab>CandleVolume</Tab>
                </TabList>
                <TabPanel>
                    <ReportSharesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleVolume />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

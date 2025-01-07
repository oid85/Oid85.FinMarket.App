import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportBondsSupertrend} from "./ReportBondsSupertrend";
import {ReportBondsCandleSequence} from "./ReportBondsCandleSequence";
import {ReportBondsCandleVolume} from "./ReportBondsCandleVolume";
import {ReportBondsCoupon} from "./ReportBondsCoupon";

export const BondsScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                    <Tab>CandleSequence</Tab>
                    <Tab>CandleVolume</Tab>
                    <Tab>Coupons</Tab>
                </TabList>                
                <TabPanel>
                    <ReportBondsSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportBondsCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportBondsCandleVolume />
                </TabPanel>
                <TabPanel>
                    <ReportBondsCoupon />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

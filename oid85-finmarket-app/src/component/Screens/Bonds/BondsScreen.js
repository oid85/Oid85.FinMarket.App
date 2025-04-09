import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportBondsSupertrend} from "./ReportBondsSupertrend";
import {ReportBondsCandleSequence} from "./ReportBondsCandleSequence";
import {ReportBondsCandleVolume} from "./ReportBondsCandleVolume";
import {ReportBondsCoupon} from "./ReportBondsCoupon";
import {ReportBondsAggregatedAnalyse} from "./ReportBondsAggregatedAnalyse";
import {ReportBondsSelection} from "./ReportBondsSelection";
import {ReportBondsMarketEvent} from "./ReportBondsMarketEvent";

export const BondsScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Купоны</Tab>
                    <Tab>Выборка</Tab>
                    <Tab>События</Tab>
                </TabList>
                <TabPanel>
                    <ReportBondsAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportBondsCoupon />
                </TabPanel>
                <TabPanel>
                    <ReportBondsSelection />
                </TabPanel>
                <TabPanel>
                    <ReportBondsMarketEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

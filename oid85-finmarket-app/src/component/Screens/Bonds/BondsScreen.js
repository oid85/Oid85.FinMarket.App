import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ReportBondsSuperTrend } from './ReportBondsSuperTrend'
import { ReportBondsCandleSequence } from './ReportBondsCandleSequence'
import { ReportBondsCandleVolume } from './ReportBondsCandleVolume'
import { ReportBondsRsi } from './ReportBondsRsi'
import {ReportBondAnalyse} from './ReportBondAnalyse'
import {ReportCoupons} from "./ReportCoupons";

export const BondsScreen = () => {
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
                    <Tab>Купоны</Tab>
                    <Tab>Сводный</Tab>
                </TabList>                
                <TabPanel>
                    <ReportBondsSuperTrend />
                </TabPanel>  
                <TabPanel>
                    <ReportBondsCandleSequence />
                </TabPanel> 
                <TabPanel>
                    <ReportBondsCandleVolume />
                </TabPanel>
                <TabPanel>
                    <ReportBondsRsi />
                </TabPanel>
                <TabPanel>
                    <ReportCoupons />
                </TabPanel>
                <TabPanel>
                    <ReportBondAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

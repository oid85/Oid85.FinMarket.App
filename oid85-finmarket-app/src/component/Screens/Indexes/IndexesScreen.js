import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportIndexesSupertrend} from "./ReportIndexesSupertrend"
import {ReportIndexesCandleSequence} from "./ReportIndexesCandleSequence"
import {ReportIndexesRsi} from "./ReportIndexesRsi"
import {ReportIndexesYieldLtm} from "./ReportIndexesYieldLtm"
import {ReportIndexesDrawdownFromMaximum} from "./ReportIndexesDrawdownFromMaximum"
import {ReportIndexesAggregatedAnalyse} from "./ReportIndexesAggregatedAnalyse"
import {ReportIndexesMarketEvent} from "./ReportIndexesMarketEvent"
import {DiagramIndexesDailyClosePrices} from "./DiagramIndexesDailyClosePrices";

export const IndexesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>Падение от макс.</Tab>
                    <Tab>События</Tab>
                    <Tab>Графики (днев)</Tab>
                </TabList>
                <TabPanel>
                    <ReportIndexesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesDrawdownFromMaximum />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesMarketEvent />
                </TabPanel>
                <TabPanel>
                    <DiagramIndexesDailyClosePrices />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

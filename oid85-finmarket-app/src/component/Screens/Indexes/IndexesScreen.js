import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportIndexesSupertrend} from "./ReportIndexesSupertrend";
import {ReportIndexesCandleSequence} from "./ReportIndexesCandleSequence";
import {ReportIndexesRsi} from "./ReportIndexesRsi";
import {ReportIndexesYieldLtm} from "./ReportIndexesYieldLtm";
import {ReportIndexesDrawdownFromMaximum} from "./ReportIndexesDrawdownFromMaximum";
import {ReportIndexesAggregatedAnalyse} from "./ReportIndexesAggregatedAnalyse";

export const IndexesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                    <Tab>CandleSequence</Tab>
                    <Tab>Rsi</Tab>
                    <Tab>YieldLtm</Tab>
                    <Tab>DrawdownFromMaximum</Tab>
                    <Tab>AggregatedAnalyse</Tab>
                </TabList>
                <TabPanel>
                    <ReportIndexesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesDrawdownFromMaximum />
                </TabPanel>
                <TabPanel>
                    <ReportIndexesAggregatedAnalyse />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

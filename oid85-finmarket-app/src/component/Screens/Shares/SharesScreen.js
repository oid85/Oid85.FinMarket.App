import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportSharesSupertrend} from "./ReportSharesSupertrend";
import {ReportSharesCandleSequence} from "./ReportSharesCandleSequence";
import {ReportSharesCandleVolume} from "./ReportSharesCandleVolume";
import {ReportSharesRsi} from "./ReportSharesRsi";
import {ReportSharesYieldLtm} from "./ReportSharesYieldLtm";
import {ReportSharesDrawdownFromMaximum} from "./ReportSharesDrawdownFromMaximum";
import {ReportSharesDividend} from "./ReportSharesDividend";
import {ReportSharesMultiplicator} from "./ReportSharesMultiplicator";
import {ReportSharesAggregatedAnalyse} from "./ReportSharesAggregatedAnalyse";
import {ReportSharesForecastTarget} from "./ReportSharesForecastTarget";
import {ReportSharesForecastConsensus} from "./ReportSharesForecastConsensus";
import {ReportSharesMarketEvent} from "./ReportSharesMarketEvent";
import {ReportSharesAssetReportEvent} from "./ReportSharesAssetReportEvent";

export const SharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Тренд</Tab>
                    <Tab>Свечи</Tab>
                    <Tab>Рост объема</Tab>
					<Tab>RSI</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>Падение от макс.</Tab>
					<Tab>Дивиденды</Tab>
                    <Tab>Мультипликаторы</Tab>
                    <Tab>Прогнозы</Tab>
                    <Tab>Консенсус прогнозы</Tab>
                    <Tab>События</Tab>
                    <Tab>Отчетность</Tab>
                </TabList>
                <TabPanel>
                    <ReportSharesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportSharesSupertrend />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleSequence />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleVolume />
                </TabPanel>
                <TabPanel>
                    <ReportSharesRsi />
                </TabPanel>
                <TabPanel>
                    <ReportSharesYieldLtm />
                </TabPanel>
                <TabPanel>
                    <ReportSharesDrawdownFromMaximum />
                </TabPanel>
                <TabPanel>
                    <ReportSharesDividend />
                </TabPanel>
                <TabPanel>
                    <ReportSharesMultiplicator />
                </TabPanel>
                <TabPanel>
                    <ReportSharesForecastTarget />
                </TabPanel>
                <TabPanel>
                    <ReportSharesForecastConsensus />
                </TabPanel>
                <TabPanel>
                    <ReportSharesMarketEvent />
                </TabPanel>
                <TabPanel>
                    <ReportSharesAssetReportEvent />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

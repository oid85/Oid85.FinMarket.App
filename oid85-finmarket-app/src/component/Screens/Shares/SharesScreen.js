import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportSharesSupertrend} from "./ReportSharesSupertrend"
import {ReportSharesCandleSequence} from "./ReportSharesCandleSequence"
import {ReportSharesCandleVolume} from "./ReportSharesCandleVolume"
import {ReportSharesRsi} from "./ReportSharesRsi"
import {ReportSharesYieldLtm} from "./ReportSharesYieldLtm"
import {ReportSharesDrawdownFromMaximum} from "./ReportSharesDrawdownFromMaximum"
import {ReportSharesDividend} from "./ReportSharesDividend"
import {ReportSharesMultiplicator} from "./ReportSharesMultiplicator"
import {ReportSharesAggregatedAnalyse} from "./ReportSharesAggregatedAnalyse"
import {ReportSharesForecastTarget} from "./ReportSharesForecastTarget"
import {ReportSharesForecastConsensus} from "./ReportSharesForecastConsensus"
import {ReportSharesMarketEvent} from "./ReportSharesMarketEvent"
import {ReportSharesAssetReportEvent} from "./ReportSharesAssetReportEvent"
import {ReportSharesFeerGreedIndex} from "./ReportSharesFeerGreedIndex"
import {DiagramSharesDailyClosePrices} from "./DiagramSharesDailyClosePrices"
import {DiagramSharesFiveMinutesClosePrices} from "./DiagramSharesFiveMinutesClosePrices"
import {DiagramSharesMultiplicatorsMcapPeNetDebtEbitda} from "./DiagramSharesMultiplicatorsMcapPeNetDebtEbitda"

export const SharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Импульс объема</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>Падение от макс.</Tab>
					<Tab>Дивиденды</Tab>
                    <Tab>Фунд. ан. (мульт.)</Tab>
                    <Tab>Прогнозы</Tab>
                    <Tab>События</Tab>
                    <Tab>Отчетность</Tab>
                    <Tab>Индекс ЖиС</Tab>
                    <Tab>Графики (днев)</Tab>
                    <Tab>Графики (5 мин)</Tab>
                    <Tab>Мульт. пузырьковая</Tab>
                </TabList>
                <TabPanel>
                    <ReportSharesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportSharesCandleVolume />
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
                    <ReportSharesForecastConsensus />
                </TabPanel>
                <TabPanel>
                    <ReportSharesMarketEvent />
                </TabPanel>
                <TabPanel>
                    <ReportSharesAssetReportEvent />
                </TabPanel>
                <TabPanel>
                    <ReportSharesFeerGreedIndex />
                </TabPanel>
                <TabPanel>
                    <DiagramSharesDailyClosePrices />
                </TabPanel>
                <TabPanel>
                    <DiagramSharesFiveMinutesClosePrices />
                </TabPanel>
                <TabPanel>
                    <DiagramSharesMultiplicatorsMcapPeNetDebtEbitda />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

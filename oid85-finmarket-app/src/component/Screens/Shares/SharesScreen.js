import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportSharesSupertrend} from "./ReportSharesSupertrend"
import {ReportSharesCandleSequence} from "./ReportSharesCandleSequence"
import {ReportSharesCandleVolume} from "./ReportSharesCandleVolume"
import {ReportSharesHurst} from "./ReportSharesHurst"
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
import {DiagramSharesMultiplicatorsMcapPeNetDebtEbitda} from "./DiagramSharesMultiplicatorsMcapPeNetDebtEbitda"

export const SharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Агрегация</Tab>
                    <Tab>Хёрст</Tab>
                    <Tab>Доходность LTM</Tab>
                    <Tab>Падение от макс.</Tab>
					<Tab>Дивиденды</Tab>
                    <Tab>Фунд. ан. (таблица)</Tab>
                    <Tab>Фунд. ан. (диаграмма)</Tab>
                    <Tab>Прогнозы</Tab>
                    <Tab>События</Tab>
                    <Tab>Отчетность</Tab>
                    <Tab>Индекс ЖиС</Tab>
                    <Tab>Графики (днев)</Tab>
                </TabList>
                <TabPanel>
                    <ReportSharesAggregatedAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportSharesHurst />
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
                    <DiagramSharesMultiplicatorsMcapPeNetDebtEbitda />
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
            </Tabs>
        </React.Fragment>
    )    
}

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { SharesScreen } from '../Screens/Shares/SharesScreen'
import {BondsScreen} from "../Screens/Bonds/BondsScreen"
import {CurrenciesScreen} from "../Screens/Currencies/CurrenciesScreen"
import {FuturesScreen} from "../Screens/Futures/FuturesScreen"
import {IndexesScreen} from "../Screens/Indexes/IndexesScreen"
import {AlgoScreen} from "../Screens/Algo/AlgoScreen";
import {PairArbitrageScreen} from "../Screens/PairArbitrage/PairArbitrageScreen";

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Алго</Tab>
                    <Tab>Парный арбитраж</Tab>
                    <Tab>Акции</Tab>
                    <Tab>Облигации</Tab>
                    <Tab>Валюты</Tab>
                    <Tab>Фьючерсы</Tab>
                    <Tab>Индексы</Tab>
                </TabList>
                <TabPanel>
                    <AlgoScreen />
                </TabPanel>
                <TabPanel>
                    <PairArbitrageScreen />
                </TabPanel>
                <TabPanel>
                    <SharesScreen />
                </TabPanel>
                <TabPanel>
                    <BondsScreen />
                </TabPanel>
                <TabPanel>
                    <CurrenciesScreen />
                </TabPanel>
                <TabPanel>
                    <FuturesScreen />
                </TabPanel>
                <TabPanel>
                    <IndexesScreen />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

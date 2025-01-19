import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { SharesScreen } from '../Screens/Shares/SharesScreen'
import {BondsScreen} from "../Screens/Bonds/BondsScreen";
import {CurrenciesScreen} from "../Screens/Currencies/CurrenciesScreen";
import {FuturesScreen} from "../Screens/Futures/FuturesScreen";
import {IndexesScreen} from "../Screens/Indexes/IndexesScreen";
import {MarketEventScreen} from "../Screens/MarketEvents/MarketEventScreen";

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Shares</Tab>
                    <Tab>Bonds</Tab>
                    <Tab>Currencies</Tab>
                    <Tab>Futures</Tab>
                    <Tab>Indexes</Tab>
                    <Tab>MarketEvents</Tab>
                </TabList>                
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
                <TabPanel>
                    <MarketEventScreen />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

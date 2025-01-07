import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {ReportCurrenciesSupertrend} from "./ReportCurrenciesSupertrend";

export const CurrenciesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Supertrend</Tab>
                </TabList>
                <TabPanel>
                    <ReportCurrenciesSupertrend />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}

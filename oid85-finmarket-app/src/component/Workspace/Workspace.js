import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { SharesScreen } from '../Screens/Shares/SharesScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Акции</Tab>
                    <Tab>Облигации</Tab>
                    <Tab>Фьючерсы</Tab>
                    <Tab>Валюты</Tab>
                    <Tab>Индексы</Tab>
                </TabList>                
                <TabPanel>
                    <SharesScreen />
                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>                                                        
            </Tabs>
        </React.Fragment>
    )    
}

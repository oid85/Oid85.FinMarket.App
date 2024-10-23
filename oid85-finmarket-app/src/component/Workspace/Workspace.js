import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TechAnalyse } from './TechAnalyse'
import { ReportStock } from '../Report/ReportStock'
import { ReportDividends } from '../Report/ReportDividends'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Техн. анализ</Tab>
                    <Tab>Дивиденды</Tab>
                    <Tab>Акция</Tab>
                </TabList>                
                <TabPanel>
                    <TechAnalyse />
                </TabPanel>
                <TabPanel>
                    <ReportDividends />
                </TabPanel>  
                <TabPanel>
                    <ReportStock />
                </TabPanel>                                                        
            </Tabs>
        </React.Fragment>
    )    
}

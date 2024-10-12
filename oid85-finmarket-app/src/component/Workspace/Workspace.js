import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment style={{  
            minWidth: 200,                      
        }}>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList
                    style={{
                        margin: 5,
                        height: 39,                   
                    }}>
                    <Tab>Направление рынка</Tab>
                </TabList>                
                <TabPanel>
                    <Report />
                </TabPanel>           
            </Tabs>
        </React.Fragment>
    )    
}

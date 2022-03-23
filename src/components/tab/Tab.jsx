import styled from 'styled-components' 

import TabItem from './TabItem'
import TabContextProvider  from './context'

const TabWrapper = styled.div`
   display: flex;
 
 
`

const Tab = ({ children }) => (
        <TabContextProvider>
            <TabWrapper>
                {children}
            </TabWrapper>
        </TabContextProvider>
    )

Tab.Item = TabItem

export default Tab

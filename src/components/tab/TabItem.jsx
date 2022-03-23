
import styled from 'styled-components'

import { useTabContext } from './context'

const TabItemWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

const TabHeader = styled.div`
   display: flex;
   padding: 20px;
   background-color: #ddd;
   margin-left: 30px;
   width: 100px;
`
const TabDesc = styled.p`
        background-color:#000;
        color: #fff;
        padding:30px;
`

const TabItem = ({ header, index, children }) => {
    const { handleClick, activeTabItem } = useTabContext()

    const setActiveTabItem = () => handleClick(index)

    return (
        <TabItemWrapper>
            <TabHeader onClick={setActiveTabItem}>{header}</TabHeader>
            {activeTabItem === index ? <TabDesc>{children}</TabDesc> : null }
           
        </TabItemWrapper>
    )
}

export default TabItem
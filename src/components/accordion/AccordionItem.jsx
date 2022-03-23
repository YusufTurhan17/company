
import styled from 'styled-components'

import { useAccordionContext } from './context'

const AccordionItemWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

const AccordionHeader = styled.div`
   display: flex;
   padding: 20px;
   background-color: #ddd;
`
const AccordionDesc = styled.p`
        background-color:#000;
        color: #fff;
        padding:30px;
`

const AccordionItem = ({ header, index, desc }) => {
    const { handleClick, activeAccordionItem } = useAccordionContext()

    const setActiveAccordionItem = () => handleClick(index)

    return (
        <AccordionItemWrapper>
            <AccordionHeader onClick={setActiveAccordionItem}>{header}</AccordionHeader>
            {activeAccordionItem === index ?   <AccordionDesc>{desc}</AccordionDesc> : null}
           
        </AccordionItemWrapper>
    )
}

export default AccordionItem
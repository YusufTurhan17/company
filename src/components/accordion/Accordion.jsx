import styled from 'styled-components' 

import AccordionItem from './AccordionItem'
import AccordionContextProvider  from './context'

const AccordionWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

const Accordion = ({ children }) => (
        <AccordionContextProvider>
            <AccordionWrapper>
                {children}
            </AccordionWrapper>
        </AccordionContextProvider>
    )

Accordion.Item = AccordionItem

export default Accordion

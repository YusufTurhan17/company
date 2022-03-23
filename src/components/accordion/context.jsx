import { createContext, useContext, useState } from "react";

const AccordionContext = createContext()

const AccordionContextProvider = ({children}) => {
  const [activeAccordionItem, setactiveAccordionItem] = useState()

  const handleClick = (clickedAccordionItem) => {
      if (clickedAccordionItem === activeAccordionItem) {
          setactiveAccordionItem(null)
      } else {
          setactiveAccordionItem(clickedAccordionItem)
      }
  }

  return (
    <AccordionContext.Provider value={{
        activeAccordionItem,
        handleClick
    }}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordionContext = () => useContext(AccordionContext)

export default AccordionContextProvider
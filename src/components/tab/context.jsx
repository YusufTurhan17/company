import { createContext, useContext, useState } from "react";

const TabContext = createContext()

const TabContextProvider = ({children}) => {
  const [activeTabItem, setactiveTabItem] = useState()

  const handleClick = (index) => {
      if (index !== activeTabItem) {
           setactiveTabItem(index)
      }  
     
      console.log(activeTabItem)
  }

  return (
    <TabContext.Provider value={{
        activeTabItem,
        handleClick
    }}>
      {children}
    </TabContext.Provider>
  )
}

export const useTabContext = () => useContext(TabContext)

export default TabContextProvider
import {createContext, useContext, useState} from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = (props) => {
    const [isSidebarOpen, seIsSidebarOpen] = useState(false)
    const [pageId, setPageId] = useState(null)
    const openSidebar = () => {
        seIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        seIsSidebarOpen(false)
    }

    return (
        <GlobalContext.Provider
            value={{
                isSidebarOpen,
                pageId,
                openSidebar,
                closeSidebar,
                setPageId,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default AppContext

import React, { createContext, useState } from 'react'

export const NavContext = createContext()
function Context({ children }) {
    const [activeNav, setActiveNav] = useState("home")
    
    return (
        <NavContext.Provider value={[activeNav, setActiveNav]} >
            {children}
        </NavContext.Provider>
    )
}

export default Context
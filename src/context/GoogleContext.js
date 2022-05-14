import { createContext, useState } from "react";

const GoogleContext = createContext()

export const GoogleProvider = ({children}) => {
  const [term, setTerm] = useState('')

  return (
    <GoogleContext.Provider value={{
      term,
      setTerm
    }}>
      {children}
    </GoogleContext.Provider>
  )
}

export default GoogleContext
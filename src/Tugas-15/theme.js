import React, { useContext, useState } from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = props => {
  const [Theme, setTheme] = useState({apa: 'dark'});
  return (
    <ThemeContext.Provider value={[Theme, setTheme]}>
      {props.children}
      <button onClick={changeTheme}>{Theme.apa}</button>
    </ThemeContext.Provider>
  )
  function changeTheme() {
    if(Theme.apa == "dark") {
      setTheme({apa: 'light'})
    } else if (Theme.apa == "light"){
      setTheme({apa: 'dark'})
    }
  }
}


console.log(ThemeContext)
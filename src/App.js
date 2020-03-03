import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from './components/main/Main';
import CountryPage from './pages/CountryPage'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from 'styled-components'
import THEMES from './constants/themes'
import { DARK } from './themes';
import { LIGHT } from './themes';
import GlobalStyle from './GlobalStyle'

const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      return DARK
    case THEMES.LIGHT:
      return LIGHT
    default:
      return null
  }
}

function App() {
  const [themeName, setThemeName] = useState(THEMES.LIGHT)

  const handleClickTheme = () => {
    if (themeName === 'DARK') {
      setThemeName(THEMES.LIGHT)
    } else {
      setThemeName(THEMES.DARK)

    }
  }
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <GlobalStyle />
      <Router>
        <Navbar handleClickTheme={handleClickTheme} />
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/country/:code' component={CountryPage}></Route>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;

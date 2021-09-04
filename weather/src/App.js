import React,{useState} from "react";
import "./App.css";
import LocationContextProvider from "./_context/locationContext";
import CurrentWeatherContextProvider from "./_context/currentWeatherContext";
import { Typography } from "@material-ui/core";
import AppContainer from "./container/appContainer";
import {ThemeProvider} from "styled-components";
import GlobleStyles from "./app_component/globalStyles";
import { lightTheme, darkTheme } from "./app_component/Themes"


const App =()=> {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobleStyles/>
      <div className="App">
      <button onClick={themeToggler}>Switch Theme</button>
        <Typography variant='h4'>Weather App
        </Typography>
        <LocationContextProvider>
          <CurrentWeatherContextProvider>
            <AppContainer />
          </CurrentWeatherContextProvider>
        </LocationContextProvider>
       
      </div>
      </>
        </ThemeProvider>
    );
  
}

export default App;


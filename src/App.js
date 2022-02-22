import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import HomePage from './pages/HomePage';
import EmailPage from './pages/EmailPage';

import { ThemeProvider } from 'styled-components';
import { MainTheme } from './utilities/Themes';
import GlobalStyles from './utilities/Global';

function App() {
  return (
    <Router>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/email" element={<EmailPage />} />
          </Routes >
        
      </ThemeProvider>
    </Router>
   
  );
}

export default App;

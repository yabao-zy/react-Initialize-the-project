import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './i18n';
import Main from './component/main';
function App() {

  return (

    <Router  >
      <Main />
    </Router>

  );
}

export default App;

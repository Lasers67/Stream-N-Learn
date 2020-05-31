import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

class Doc extends React.Component{
    componentDidMount(){
      document.title = "Stream N Learn"
    }
  
    render(){
      return(
        <></>
      )
    }
  }

ReactDOM.render(<><Doc/><App /></>, document.getElementById('root'));
registerServiceWorker();

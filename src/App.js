
import React, { Component } from 'react';

import { withRouter, matchPath, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import * as actionTypes from './store/actions';

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount(){
    this.props.getData();
  }
  render(){
    if (this.props.loading) return (
      <div className="col" height="100%">
      <center>
        <h1>
          Loading!!
        </h1>
        <img src={logo} className="App-logo" />
      </center>
    </div>
    )
    return (
    
      <Switch>
        <Route path="/drawings/:languageCode/:countryCode/:productId" 
            component={()=>  <div>{process.env.REACT_APP_TITLE}</div>} 
          />
          <Route path="/finishes/:languageCode/:countryCode/:productId" component={()=>  <div>Finishes</div>}  />
          <Redirect exact from='/' to='/drawings/en/us/22' />
      </Switch>
    
    )
  }
}
const mapStateToPorps = state => {
  return {
    loading: state.loadingData,
    productData: state.data,
  }
} 
const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actionTypes.getData()),
    loadingData: ()=> dispatch(actionTypes.loadingData())
  }
}


// export default App;

export default connect(mapStateToPorps, mapDispatchToProps)((withRouter(App)));

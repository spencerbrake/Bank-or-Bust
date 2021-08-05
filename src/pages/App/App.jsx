import React, {useState, Component} from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import * as betAPI from '../../services/bet-api'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import MyBetsPage from '../MyBetsPage/MyBetsPage';
import BetHistoryPage from '../BetHistoryPage/BetHistoryPage';
import NavBar from '../../../src/components/NavBar/NavBar'

class App extends Component {
  state = {
    bets: [],
    user: userService.getUser()
  };

  async componentDidMount() {
    const bets = await betAPI.getAll();
    this.setState({ bets: bets });
  }

  handleAddBet = async newBetData => {
    const newBet = await betAPI.create(newBetData);
    this.setState(state => ({
      bets: [...state.bets, newBet]
    }),
    () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank or Bust
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>

        <Route exact path='/bet-history' render={() =>
            <BetHistoryPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>

          <Route exact path='/' render={() =>
            <MyBetsPage
              user={this.state.user}
              bets={this.state.bets}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>


      </div>
    );
  }
}

export default App;

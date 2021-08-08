import React, {useState, Component} from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import * as betAPI from '../../services/bet-api'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import MyBetsPage from '../MyBetsPage/MyBetsPage';
import BetHistoryPage from '../BetHistoryPage/BetHistoryPage';
import NavBar from '../../../src/components/NavBar/NavBar';
import UpdateBetPage from '../../pages/UpdateBetPage/UpdateBetPage'

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
    newBetData.user = this.state.user._id
    const newBet = await betAPI.create(newBetData);
    this.setState(state => ({
      bets: [...state.bets, newBet]
    }),
    () => this.props.history.push('/'));
  }

  handleDeleteBet = async id => {
    await betAPI.deleteOne(id);
    this.setState(
      state => ({
        bets: state.bets.filter(b => b._id !== id)
      }),
      () => this.props.history.push('/')
    );
  };

  handleUpdateBet = async updatedBetData => {
    const updatedBet = await betAPI.update(updatedBetData);
    const newBetArray = this.state.bets.map(b => 
      b._id === updatedBet._id ? updatedBet : b
      );
      this.setState(
        {bets: newBetArray},
        () => this.props.history.push('/')
      );
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
              bets={this.state.bets}
              handleLogout={this.handleLogout}
              handleDeleteBet={this.handleDeleteBet}
            />
          }/>

          <Route exact path='/' render={() =>
            <MyBetsPage
              user={this.state.user}
              bets={this.state.bets}
              handleLogout={this.handleLogout}
              handleAddBet={this.handleAddBet}
              handleDeleteBet={this.handleDeleteBet}
              handleUpdateBet={this.handleUpdateBet}
            />
          }/>
          <Route exact path='/update' render={() =>
            <UpdateBetPage 
              user={this.state.user}
              handleUpdateBet={this.handleUpdateBet}

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

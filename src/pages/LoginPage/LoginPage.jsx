import React, { useState, Component } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class LoginPage extends Component {

    state = {
      email: '',
      pw: ''
    };

    handleChange = (e) => {
        // Implement in an elegant way
        this.setState({
          // Using Computed Property Names
          [e.target.name]: e.target.value
        });
      }

      handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.login(this.state);
          this.props.handleSignupOrLogin();
          // Successfully signed up - show GamePage
          this.props.history.push('/');
        } catch (err) {
          // Do not alert in your projects,
          // show a modal or some UI instead
          alert('Invalid login');
        }
      }

      render() {
        return (
          <div className="LoginPage">
            <form className="px-4 py-3" onSubmit={this.handleSubmit} >
              <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        );
      }
    }

    export default LoginPage;


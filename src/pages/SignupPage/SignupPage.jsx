import React, { useState, Component } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SignupForm from '../../components/SignupForm/SignupForm';

import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


class SignupPage extends Component {
    constructor(props) {
      super(props);
      this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
      }

      render() {
        return (
          <div className='SignupPage'>

            <SignupForm {...this.props} updateMessage={this.updateMessage} />
            <p>{this.state.message}</p>
          </div>
        );
      }
    }

    export default SignupPage;

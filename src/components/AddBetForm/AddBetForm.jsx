import React, {Component} from 'react';

class AddBetForm extends Component {
    state = {
        invalidForm: true, 
        formData: {
            game: '',
            team: '',
            type: '',
            odds: null,
            amount: null
        }
    };

    formRef = React.createRef();

    handleSubmit = b => {
        b.preventDefault();
        this.props.handleAddBet(this.state.formData)
    }
}

export default AddBetForm 
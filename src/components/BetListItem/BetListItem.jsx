import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class BetListItem extends Component {
    state = { 
        formData: this.props.bet,

    }

    handleSubmit = b => {
        b.preventDefault();
        this.props.handleUpdateBet(this.state.formData);
    };

    handleChange = b => {
        const formData = {...this.state.formData, [b.target.name]: b.target.value};
        this.setState({
            formData,
        });
    };


    render() {
    return (
        <>
                <tr>
                <td>{this.props.bet.game}</td>
                    <td>{this.props.bet.team}</td>
                    <td>{this.props.bet.type}</td>
                    <td>{this.props.bet.odds}</td>
                    <td>${this.props.bet.amount}</td>
                    <td>
                    <div class="form-group">
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.handleChange} name="result" class="form-control" id="sel1">
                            <option disabled selected>Select Option</option>
                            <option>Win</option>
                            <option>Loss</option>
                            <option>Tie</option>
                        </select>



                    <button
                        type="submit"

                    >
                        Close Out
                    </button>
                    </form>
                    </div>
                    </td>
                </tr>
        </>
    );
    }
}
export default BetListItem;
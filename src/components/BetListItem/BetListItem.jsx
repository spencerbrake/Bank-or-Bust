import React, {Component} from 'react';


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
                <div className="select-close-out">
                    <form onSubmit={this.handleSubmit}>
                    <select class="custom-select custom-select-sm" onChange={this.handleChange} name="result">
                                <option disabled selected>Select</option>
                                <option>Win</option>
                                <option>Loss</option>
                                <option>Tie</option>
                            </select>
                            <br/><br/>
                            <button className="btn btn-warning btn-sm" type="submit">Close Out</button>
                        </form>
                    </div>
                    </td>
            </tr>
        </>
        );
    }
}
export default BetListItem;
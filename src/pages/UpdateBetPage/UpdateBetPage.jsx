import React, {Component} from 'react';

class UpdateBetPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.bet
    };

    formRef = React.createRef();

    handleSubmit = b => {
        b.preventDefault();
        this.props.handleUpdateBet(this.state.formData);
    };

    handleChange = b => {
        const formData = {...this.state.formData, [b.target.name]: b.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };
    render() {
        return (
            <>
                <form ref={this.formRef} onSubmit={this.handleSubmit} className="form-row">
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="game"
                            value={this.state.formData.game}
                            onChange={this.handleChange}
                            required
                            placeholder="Game"
                        />
                    </div>

                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="team"
                            value={this.state.formData.team}
                            onChange={this.handleChange}
                            required
                            placeholder="Team"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="type"
                            value={this.state.formData.type}
                            onChange={this.handleChange}
                            required
                            placeholder="Type"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="odds"
                            value={this.state.formData.odds}
                            onChange={this.handleChange}
                            required
                            placeholder="Odds"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="amount"
                            value={this.state.formData.amount}
                            onChange={this.handleChange}
                            required
                            placeholder="Amount"
                        />
                    </div>

                    <button 
                        className="btn btn-primary" 
                        type="submit"
                        disabled={this.state.invalidForm}
                        >

                        Submit form

                    </button>
                </form>
            </>
        )
    }
}

export default UpdateBetPage;
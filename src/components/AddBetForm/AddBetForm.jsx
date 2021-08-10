import React, {Component} from 'react';

class AddBetForm extends Component {
    state = {
        invalidForm: true, 
        formData: {
            game: '',
            team: '',
            type: '',
            odds: '',
            amount: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = b => {
        b.preventDefault();
        this.props.handleAddBet(this.state.formData)
    }

    handleChange = b => {
        const formData = {...this.state.formData,
        [b.target.name]: b.target.value
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
        console.log(this.state)
    };

    render() {
        return (
            <>
            <div className="add-bet-form">
                <form ref={this.formRef} onSubmit={this.handleSubmit} className="">
                    <div >
                        <div className="form-row"> 
                            <div className="form-group col-md">
                                <input
                                    className="form-control"
                                    name="game"
                                    value={this.state.formData.game}
                                    onChange={this.handleChange}
                                    required
                                    placeholder="Game"
                                />
                            </div>
                    
                            <div className="form-group col-md">
                                <input
                                    className="form-control"
                                    name="team"
                                    value={this.state.formData.team}
                                    onChange={this.handleChange}
                                    required
                                    placeholder="Team"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md">
                                <input
                                    className="form-control"
                                    name="type"
                                    value={this.state.formData.type}
                                    onChange={this.handleChange}
                                    required
                                    placeholder="Type"
                                />
                            </div>
                        
                            <div className="form-group col-md">
                                <input
                                    className="form-control"
                                    name="odds"
                                    value={this.state.formData.odds}
                                    onChange={this.handleChange}
                                    required
                                    placeholder="Odds"
                                />
                            </div>
                        
                            <div className="form-group col-md">
                                <input
                                    className="form-control"
                                    name="amount"
                                    value={this.state.formData.amount}
                                    onChange={this.handleChange}
                                    required
                                    placeholder="Amount"
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="add-bet-btn">
                            <button 
                                className="btn btn-primary btn-lg btn-block" 
                                type="submit"
                                disabled={this.state.invalidForm}
                                >
                                
                                Add bet
                                
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </>
            )
    }
}

export default AddBetForm;
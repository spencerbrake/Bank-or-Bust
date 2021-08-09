import React, { Component } from 'react';


class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            betFilter: "",

        };
    }

    updateFilterForm = (event) => {
        this.setState({ betFilter: event.target.value})
        console.log(event.target.value)
    }

    handleFilterSubmit = (event) => {
        event.preventDefault()
        let ts = Math.round(new Date().getTime() / 1000);
        if (this.state.betFilter === 'day') {
            let newBets = this.props.bets.filter(bet => ((bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie') && (new Date(bet.createdAt).getTime() / 1000) > (ts - (24 * 3600))))
            this.props.setBets(newBets)
        } else if (this.state.betFilter === 'week') {
            let newBets = this.props.bets.filter(bet => ((bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie') && (new Date(bet.createdAt).getTime() / 1000) > (ts - ((24 * 7) * 3600))))
            this.props.setBets(newBets)
        } else if (this.state.betFilter === 'month') {
            let newBets = this.props.bets.filter(bet => ((bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie') && (new Date(bet.createdAt).getTime() / 1000) > (ts - ((24 * 30) * 3600))))
            this.props.setBets(newBets)
        } else if (this.state.betFilter === 'year') {
            let newBets = this.props.bets.filter(bet => ((bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie') && (new Date(bet.createdAt).getTime() / 1000) > (ts - ((24 * 365) * 3600))))
            this.props.setBets(newBets)
        } else if (this.state.betFilter === 'all') {
            let newbets = this.props.bets.filter(bet => ((bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie')))
            this.props.setBets(newbets)
        }
    }

    render() {
        return (
            <div className="filter-form">
                    <form onSubmit={this.handleFilterSubmit} className="form-inline">
                        <select value={this.state.betFilter} className="custom-select custom-select-sm" onChange={this.updateFilterForm}>
                            <option value >Filter</option>
                            <option value="day">Day</option>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                            <option value="all">All</option>

                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <button className="btn btn-warning btn-sm" type="submit">Search </button>
                        </span>
                    </form>
                </div>
        )
    }
}

export default FilterForm;
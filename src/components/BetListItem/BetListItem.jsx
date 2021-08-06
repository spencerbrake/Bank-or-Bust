import React from 'react';
import {Link} from 'react-router-dom';


function BetListItem(props) {
    return (
        <div>
        <table className="table table-dark">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Team</th>
                    <th scope="col">Type</th>
                    <th scope="col">Odds</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.bet.game}</td>
                    <td>{props.bet.team}</td>
                    <td>{props.bet.type}</td>
                    <td>{props.bet.odds}</td>
                    <td>${props.bet.amount}</td>
                    <td>
                        <button onClick={() => props.handleDeleteBet(props.bet._id)}
                        >
                            X
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}
export default BetListItem;
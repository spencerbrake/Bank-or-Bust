import React from 'react';
import {Link} from 'react-router-dom';


function BetListItem({bet}) {
    return (
        <table class="table table-dark">
            <thead>
                <th>Game</th>
                <th>Team</th>
                <th>Type</th>
                <th>Odds</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <td>{bet.game}</td>
                <td>{bet.team}</td>
                <td>{bet.type}</td>
                <td>{bet.odds}</td>
                <td>{bet.amount}</td>
            </tbody>
        </table>
    );
}
export default BetListItem;
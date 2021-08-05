import React from 'react';
import {Link} from 'react-router-dom';


function BetListItem({bet}) {
    return (
        <table class="table table-dark">
            <thead class="thead-dark">
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
                    <td>{bet.game}</td>
                    <td>{bet.team}</td>
                    <td>{bet.type}</td>
                    <td>{bet.odds}</td>
                    <td>${bet.amount}</td>
                </tr>
            </tbody>
        </table>
    );
}
export default BetListItem;
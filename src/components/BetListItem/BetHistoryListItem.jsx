import React from 'react';
import {Link} from 'react-router-dom';


function BetHistoryListItem(props) {

    return (


                <tr>
                    <td>{props.bet.game}</td>
                    <td>{props.bet.team}</td>
                    <td>{props.bet.type}</td>
                    <td>{props.bet.odds}</td>
                    <td>${props.bet.amount}</td>
                    <td>

                    </td>
                </tr>

    );
}
export default BetHistoryListItem;
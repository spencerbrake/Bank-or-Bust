import React from 'react';



function BetHistoryListItem(props) {

    return (


                <tr>
                    <td>{props.bet.game}</td>
                    <td>{props.bet.team}</td>
                    <td>{props.bet.type}</td>
                    <td>{props.bet.odds}</td>
                    <td>${props.bet.amount}</td>
                    <td>{props.bet.result}</td>
                    <td>
                    <button
                        className="btn btn-sm btn-danger margin-left-10"
                        onClick={() => props.handleDeleteBet(props.bet._id)}
                    >
                        x
                    </button>
                    </td>
                    <td>

                    </td>
                </tr>

    );
}
export default BetHistoryListItem;
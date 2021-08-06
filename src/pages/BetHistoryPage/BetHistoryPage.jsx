import React from 'react';
import BetHistoryListItem from '../../components/BetListItem/BetHistoryListItem';
import './BetHistoryPage.css';

const BetHistoryPage = (props) => {
    return (
        <>
        <h1>Bet History</h1>
            <br/>
        <div className="Bet-History-table">

            <table className="table table-striped table-dark">
            <thead className="">
                <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Team</th>
                    <th scope="col">Type</th>
                    <th scope="col">Odds</th>
                    <th scope="col">Amount</th>    
                    <th scope="col">Result</th>               
                </tr>
            </thead>
            <tbody>    
            {props.bets.filter(bet => (props.user && props.user._id === bet.user)).map(bet => 
                    <BetHistoryListItem
                    bet={bet}
                    key={bet._id} 

                    /> 
                )}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default BetHistoryPage
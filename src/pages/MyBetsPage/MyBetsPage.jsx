import React from 'react';
import AddBetForm from '../../components/AddBetForm/AddBetForm';
import BetListItem from '../../components/BetListItem/BetListItem';
import CloseOut from '../../components/CloseOut/CloseOut';
import './MyBetsPage.css';

function MyBetsPage(props) {
    return (
        <>
        <h1>My Bets</h1>
        <br/><br/><br/>
        <div className="MyBetsPage-table">

            <table className="table table-striped table-dark">
            <thead className="">
                <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Team</th>
                    <th scope="col">Type</th>
                    <th scope="col">Odds</th>
                    <th scope="col">Amount</th>
                    <th>Result</th>                   
                </tr>
            </thead>

            <tbody>    
            {props.bets.filter(bet => (props.user && props.user._id === bet.user && bet.result !== 'Win' && bet.result !== 'Loss' && bet.result !== 'Tie')).map(bet => 
                    <BetListItem
                    bet={bet}
                    key={bet._id}
                    handleUpdateBet={props.handleUpdateBet} 
                    />
                )}
            </tbody>
            </table>
                <div>
                    <AddBetForm 
                    handleAddBet={props.handleAddBet}
                    />
                </div>
        </div>
        </>
    );
}

export default MyBetsPage;
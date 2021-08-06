import React from 'react';
import AddBetForm from '../../components/AddBetForm/AddBetForm'
import BetListItem from '../../components/BetListItem/BetListItem';
import './MyBetsPage.css';

function MyBetsPage(props) {
    return (
        <>
            <h1>My Bets</h1>
            <div className="MyBetsPage-table">
                {props.bets.filter(bet => (props.user && props.user._id === bet.user)).map(bet => 
                    <BetListItem
                    bet={bet}
                    key={bet._id}
                    handleDeleteBet={props.handleDeleteBet} 
                    />
                )}
            </div>
            <div>
                <AddBetForm 
                handleAddBet={props.handleAddBet}
                />
            </div>
        </>
    );
}

export default MyBetsPage;
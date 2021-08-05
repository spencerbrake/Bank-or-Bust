import React from 'react';
import BetListItem from '../../components/BetListItem/BetListItem';
import './MyBetsPage.css';

function MyBetsPage(props) {
    return (
        <>
            <h1>My Bets</h1>
            <div className="MyBetsPage-grid">
                {props.bets.map(bet => (
                    <BetListItem
                    bet={bet}
                    key={bet._id} 
                    />
                ))}
            </div>
        </>
    );
}

export default MyBetsPage;
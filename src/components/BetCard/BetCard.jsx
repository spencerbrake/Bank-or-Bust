import React from 'react';
// import {Link} from 'react-router-dom';

function BetCard({ bet }) {
    return (
        <div className='panel panel-default'>
            <div className='panel-body'>
                <dl>
                    <dt>Game</dt>
                    <dd>{bet.game}</dd>
                    <dt>Team</dt>
                    <dd>{bet.team}</dd>
                    <dt>Type</dt>
                    <dd>{bet.type}</dd>
                    <dt>Odds</dt>
                    <dd>{bet.odds}</dd>
                    <dt>Amount</dt>
                    <dd>{bet.amount}</dd>
                </dl>
            </div>
        </div>
    );
}

export default BetCard;
import React from 'react';
import AddBetForm from '../../components/AddBetForm/AddBetForm';
import BetListItem from '../../components/BetListItem/BetListItem';
import './MyBetsPage.css';

const MyBetsPage = (props) => {

    const showAddBet = (props.user) ? <AddBetForm handleAddBet={props.handleAddBet}/> : <h2 className="login-msg">Login to track bets!</h2>

    function pendingWagers(arr) {
        let count = 0;
        arr.forEach(function(bet) {
            if(props.user && props.user._id === bet.user && bet.result !== 'Win' && bet.result !== 'Loss' && bet.result !== 'Tie') {
                count++
            }
        })
        return count 
    } 
    return (
        <>
            <br/>
            <h1><strong>My Bets</strong></h1>
            <br/>
            <div className="row">
                <div className="pending-tron">
                    <div className="jumbotron text-center col-md-12 bg-secondary">
                        <h3>Pending: <strong>${props.bets.filter(bet => (props.user && props.user._id === bet.user && bet.result !== 'Win' && bet.result !== 'Loss' && bet.result !== 'Tie')).reduce((total, bet) => total + bet.amount, 0)}</strong> </h3>
                    </div>
                </div>
            &nbsp;&nbsp;&nbsp;
                <div className="pending-wagers-tron">
                    <div className="jumbotron text-center col-md-12 bg-secondary">
                        <h3>Pending Wagers: <strong>{pendingWagers(props.bets)}</strong></h3>
                    </div>
                </div>
            </div>  
            <div className="MyBetsPage-table table-responsive">
                <table className="table table-striped table-dark ">
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
                    {props.bets.filter(bet => (props.user && props.user._id === bet.user && bet.result !== 'Win' && bet.result !== 'Loss' && bet.result !== 'Tie')).map(bet => 
                            <BetListItem
                            bet={bet}
                            key={bet._id} 
                            handleUpdateBet={props.handleUpdateBet}  
                            /> 
                        )}
                    </tbody>
                </table>
            </div>
            <br/>
            <div className="add-bet-form">
                {showAddBet}         
            </div>
            <br/><br/>
        </>
    );    
}

export default MyBetsPage;
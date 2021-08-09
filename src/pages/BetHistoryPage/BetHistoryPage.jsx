import React, { useState, useEffect} from 'react';
import BetHistoryListItem from '../../components/BetListItem/BetHistoryListItem';
import FilterForm from '../../components/FilterForm/FilterForm';
import './BetHistoryPage.css';



const BetHistoryPage = (props) => {
    const [bets, setBets] = useState([])

    useEffect(() => {
        setBets(props.bets.filter(bet => (bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie')))
    }, [props.bets])

    function performance(arr) {
        let win = 0;
        let loss = 0;
        arr.forEach(function(ele) {
            if (ele.result === 'Win') {
                win += ele.amount 
            } else if (ele.result === 'Loss') {
                loss += ele.amount
            }
        })
        return win - loss
    }

    function totalWagers(arr) {

        let count = 0;
        arr.forEach(function(ele) {
            if(ele.result === 'Win' || ele.result === 'Loss' || ele.result === 'Tie') {
                count++
            }
        })
        return count 
    }
    return (
        <>
        <br/>
            <br/>
            <div className="row">
                <div className="pending-tron">
                    <div className="jumbotron text-center col-md-12 bg-secondary">
                        <h3>Performance: <strong>${performance(props.bets)}</strong></h3>
                    </div>
                </div>    
            &nbsp;&nbsp;&nbsp;
                <div className="pending-wagers-tron">
                    <div className="jumbotron text-center col-md-12 bg-secondary">
                        <h3>Total Wagers: <strong>{totalWagers(props.bets)}</strong></h3>
                    </div>
                </div>
            </div>

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
            {bets.map(bet =>  
                    <BetHistoryListItem
                    bet={bet}
                    key={bet._id} 
                    handleDeleteBet={props.handleDeleteBet}
                    /> 
                    )
                }
            </tbody>
        </table>
        </div>
        <br/>
        <br/>
        </>
    )
}

export default BetHistoryPage;
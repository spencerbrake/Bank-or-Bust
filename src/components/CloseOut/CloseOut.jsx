import React from 'react';


function CloseOut(props) {
    return(
        <button
            type="submit"
            onClick={() => props.handleUpdateBet(props.bet._id)}
            >
            Close Out
        </button>
    )
}

export default CloseOut;
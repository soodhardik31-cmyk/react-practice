import { useState } from 'react';

import { genTicket, sum } from './helper';
import Ticket from './Ticket';

export default function Lottery({n=3 , winningSum=15}) {
    const [ticket, setTicket] = useState(genTicket(n));
    const isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <>
            <div className="ticket">
                <h1>Lottery Game</h1>
                <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulaions , you won!"}</h3>
        </>
    )
}
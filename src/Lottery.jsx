import { useState } from 'react';
import "./Lottery.css";
import { genTicket, sum } from './helper';

export default function Lottery() {
    const [ticket, setTicket] = useState(genTicket(3));
    const isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    }

    return (
        <>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulaions , you won!"}</h3>
        </>
    )
}
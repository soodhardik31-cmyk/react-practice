import { useState } from 'react';
import "./Lottery.css";
import { genTicket } from './helper';

export default function Lottery() {
    const [ticket, setTicket] = useState(genTicket(3));


    return (
        <>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </>
    )
}
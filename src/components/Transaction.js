import React , {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
                        {transaction.text} <span>${transaction.amount}</span><button class="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li> 
        </div>
    )
}

export default Transaction

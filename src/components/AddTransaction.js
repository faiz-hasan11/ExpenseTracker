import React, { useState , useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
function AddTransaction() {
    const [text,setText] = useState("")
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const newTransaction =
        {
            id:Math.floor(Math.random() * 1000000),
            text:text,
            amount:parseInt(amount)
        }
        addTransaction(newTransaction)
        setText("")
        setAmount(0)
    }

    return (
        <div>
             <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label HtmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label HtmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction

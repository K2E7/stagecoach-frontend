import React, { useState } from 'react';
import axios from 'axios';
import './styles/MakeTransaction.css'; // Create a new CSS file for styles

const MakeTransaction = ({ userId }) => {
    const [creditorAccount, setCreditorAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(
                'http://localhost:8080/api/transactions/transfer',
                {
                    debtorAccountId: userId,  // Assuming userId is the debtor's account
                    creditorAccountId: creditorAccount,
                    amount: amount
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setMessage(`Transaction successful: ${response.data.status}`);
        } catch (error) {
            setMessage('Transaction failed.');
            console.error('Error making transaction:', error);
        }
    };

    return (
        <div className="make-transaction">
            <h3>Make a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={creditorAccount}
                    onChange={(e) => setCreditorAccount(e.target.value)}
                    placeholder="Creditor Account"
                    required
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MakeTransaction;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/TransactionHistory.css'; // Create a new CSS file for styles

const TransactionHistory = ({ userId }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchTransactionHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/transactions/history/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transaction history:', error);
            }
        };

        fetchTransactionHistory();
    }, [userId]);

    return (
        <div className="transaction-history">
            <h3>Transaction History</h3>
            {transactions.length > 0 ? (
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction.id}>
                            <p><strong>Creditor:</strong> {transaction.creditorAccount}</p>
                            <p><strong>Debtor:</strong> {transaction.debtorAccount}</p>
                            <p><strong>Amount:</strong> ${transaction.amount}</p>
                            <p><strong>Status:</strong> {transaction.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
};

export default TransactionHistory;
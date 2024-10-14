import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Dash_Welcome';
import Balance from '../components/Dash_Balance';
import MakeTransaction from '../components/MakeTransaction';
import TransactionHistory from '../components/TransactionHistory';
import axios from 'axios';
import './styles/DashPage.css';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);
    const userId = localStorage.getItem('userId'); // Fetch the user ID

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchAccountData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${userId}/accounts`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const account = response.data[0];
                setUsername(account.userId);
                setAccountNumber(account.accountNumber);
                setBalance(account.balance);
            } catch (error) {
                console.error('Error fetching account data:', error);
            }
        };

        fetchAccountData();
    }, [userId]);

    return (
        <div className="dash-landing-page">
            <header className="dash-header">
                <Navbar />
            </header>
            <div className="dash-landing-content">
                <div className="top">
                    <div className="welcome-wrapper neumorph-ui-left">
                        <Welcome username={username} accountNumber={accountNumber} />
                    </div>
                    <div className="balance-wrapper neumorph-ui-left">
                        <Balance balance={balance} accountNumber={accountNumber} />
                    </div>
                </div>
                <div className="bottom">
                    <div className="make-transaction-wrapper neumorph-ui-left">
                        <MakeTransaction userId={userId} />
                    </div>
                    <div className="transaction-history-wrapper neumorph-ui-left">
                        <TransactionHistory userId={userId} />
                    </div>
                </div>
            </div>
            <footer className="landing-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Dashboard;
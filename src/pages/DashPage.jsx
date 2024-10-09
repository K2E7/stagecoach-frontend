import "./styles/DashPage.css"
import Navbar from "../components/Navbar"
import Welcome from "../components/Dash_Welcome";
import Balance from "../components/Dash_Balance";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const [username, setUsername] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        // Assuming userId is retrieved from local storage or context after login
        const userId = localStorage.getItem("userId");

        // Fetch user account data
        const fetchAccountData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${userId}/accounts`);
                const account = response.data[0]; // Assuming there's only one account per user
                setUsername(account.userId); // Set userId for username
                setAccountNumber(account.accountNumber); // Set account number for the Welcome component
                setBalance(account.balance);
            } catch (error) {
                console.error("Error fetching account data:", error);
            }
        };

        fetchAccountData();
    }, []);

    return (
        <div className="dash-landing-page">
            <header className="dash-header">
                <Navbar />
            </header>
            <div className="dash-landing-content">
                <div className="top">
                    <div className="welcome-wrapper neumorph-ui-left">
                        <Welcome username={username} accountNumber={accountNumber}/>
                    </div>
                    <div className="balance-wrapper neumorph-ui-left">
                        <Balance />
                    </div>
                </div>
                <div className="bottom">
                    <div className="welcome-wrapper neumorph-ui-left">
                        <Welcome />
                    </div>
                    <div className="balance-wrapper neumorph-ui-left">
                        <Balance />
                    </div>
                </div>
            </div>
            <footer className="landing-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Dashboard;
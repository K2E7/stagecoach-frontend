// Dashboard.jsx
import "./styles/DashPage.css";
import Navbar from "../components/Navbar";
import Welcome from "../components/Dash_Welcome";
import Balance from "../components/Dash_Balance";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token"); 
        const username = localStorage.getItem("username");// Retrieve the JWT token

        if (!token || !userId) {
            setError("Authentication token not found. Please log in again.");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                // Set up Axios config with Authorization header
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                
                setUsername(username);

                // Fetch account data
                const accountResponse = await axios.get(`http://localhost:8080/api/accounts/`, config);
                const accounts = accountResponse.data;

                if (accounts.length === 0) {
                    setError("No accounts found for this user.");
                } else {
                    const account = accounts[0]; // Assuming one account per user
                    setAccountNumber(account.accountNumber);
                    setBalance(account.balance);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch account data. Please try again.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

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
                        <Balance balance={balance} />
                    </div>
                </div>
                {/* Remove or adjust the bottom div as needed */}
                {/* <div className="bottom">
                    <div className="welcome-wrapper neumorph-ui-left">
                        <Welcome />
                    </div>
                    <div className="balance-wrapper neumorph-ui-left">
                        <Balance />
                    </div>
                </div> */}
            </div>
            <footer className="landing-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Dashboard;

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

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        const fetchData = async () => {
            try {
                // Fetch user data
                const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                const username = await axios.get(`http://localhost:8080/api/users/${userId}`, config);
                const accountNumber = await axios.get(`http://localhost:8080/api/users/${userId}/accounts`, config);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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
                {/* Remove the duplicate components in the bottom div if not needed */}
            </div>
            <footer className="landing-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Dashboard;

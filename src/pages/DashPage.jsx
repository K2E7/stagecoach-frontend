import "./styles/DashPage.css"
import Navbar from "../components/Navbar"
import Welcome from "../components/Dash_Welcome";
import Balance from "../components/Dash_Balance";

const Dashboard = () => {
    return (
        <div className="dash-landing-page">
            <header className="dash-header">
                <Navbar />
            </header>
            <div className="dash-landing-content">
                <div className="top">
                    <div className="welcome-wrapper neumorph-ui-left">
                        <Welcome />
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
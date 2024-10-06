import "./styles/RegisterPage.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import NeoButton from "../components/NeoButton";
import Selector from '../components/Selector';
import { SelectorProvider } from '../components/contexts/SelectorContext';
import RegistrationForm from "../components/RegistrationForm";

const LandingPage = () => {
    return (
        <div className="register-page">
            <header className="header">
                <Navbar />
            </header>
            <div className="register-content">
                <div className="register-content-item reg-left">
                    <div className="reg-selector-wrapper">
                        <div className="reg-heading">
                            <div className="reg-highlight">
                                Register
                            </div>
                        </div>
                    </div>
                    <div className="reg-form-wrapper">
                        <RegistrationForm />
                    </div>
                </div>
                <div className="register-content-item reg-right">
                    <About />
                </div>
            </div>
            <footer className="register-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default LandingPage;
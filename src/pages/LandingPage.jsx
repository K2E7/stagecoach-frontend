import "./styles/LandingPage.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import NeoButton from "../components/NeoButton";
import Form from '../components/Form';
import Selector from '../components/Selector';
import { SelectorProvider } from '../components/contexts/SelectorContext';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className="landing-page">
            <header className="header">
                <Navbar />
            </header>
            <div className="landing-content">
                <div className="landing-content-item left">
                    <About />
                    <NeoButton text="Register" onClick={handleRegisterClick} />
                </div>
                <div className="landing-content-item right">
                    <SelectorProvider>
                        <div className="selector-wrapper">
                            <Selector />
                        </div>
                        <div className="form-wrapper">
                            <Form />
                        </div>
                    </SelectorProvider>
                </div>
            </div>
            <footer className="landing-footer">
                <p>2024 Stagecoach - All Rights Reserved</p>
            </footer>
        </div>
    );
};
export default LandingPage;
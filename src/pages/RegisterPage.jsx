import "./styles/RegisterPage.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import RegistrationForm from "../components/RegistrationForm";

const RegisterPage = () => {
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
                2024 Stagecoach - All Rights Reserved
            </footer>
        </div>
    );
}

export default RegisterPage;
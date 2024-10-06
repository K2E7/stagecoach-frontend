import NeoButton from './NeoButton';
import "./styles/RegistrationForm.css"

const RegistrationForm = () => {

    return (
        <div className="div-form">
            <div className="inputWrapper">
                <div className="form-elem">
                    <div className="formLabel">Username</div>
                    <input className="textfield" type="email" id="email" />
                </div>
                <div className="form-elem">
                    <div className="formLabel">Email</div>
                    <input className="textfield" type="email" id="email" />
                </div>
                <div className="form-elem">
                    <div className="formLabel">Password</div>
                    <input className="textfield" type="password" id="password" />
                </div>
            </div>

            <NeoButton text="Submit" className="custom-submit" />
        </div>
    )
};

export default RegistrationForm;
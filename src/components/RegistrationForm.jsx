import NeoButton from './NeoButton';
import "./styles/RegistrationForm.css"

const RegistrationForm = () => {

    return (
        <div className="r-div-form">
            <div className="r-inputWrapper">
                <div className="r-form-elem">
                    <div className="r-formLabel">Username</div>
                    <input className="r-textfield" type="email" id="email" />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">Email</div>
                    <input className="r-textfield" type="email" id="email" />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">Password</div>
                    <input className="r-textfield" type="password" id="password" />
                </div>
            </div>

            <NeoButton text="Submit" className="custom-submit" />
        </div>
    )
};

export default RegistrationForm;
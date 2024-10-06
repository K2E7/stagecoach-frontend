import { useContext } from 'react';
import { SelectorContext } from './contexts/SelectorContext';
import NeoButton from './NeoButton';

const RegistrationForm = () => {
    const { selected } = useContext(SelectorContext);
    return (
        <div className="div-form">
            {selected === "Email" ? (
                <div className="inputWrapper">
                    <div className="form-elem">
                        <div className="formLabel">Email</div>
                        <input className="textfield" type="email" id="email" />
                    </div>
                    <div className="form-elem">
                        <div className="formLabel">Password</div>
                        <input className="textfield" type="password" id="password" />
                    </div>
                </div>
            ) : (
                <div className="inputWrapper">
                    <div className="form-elem">
                        <div className="formLabel">User Id</div>
                        <input className="textfield" type="text" id="userId" />
                    </div>
                    <div className="form-elem">
                        <div className="formLabel">Password</div>
                        <input className="textfield" type="password" id="password" />
                    </div>
                </div>
            )}
            <NeoButton text="Submit" className="custom-submit" />
        </div>
    )
};

export default RegistrationForm;
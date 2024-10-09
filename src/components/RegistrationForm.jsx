import NeoButton from './NeoButton';
import axios from 'axios';
import { useState } from 'react';
import "./styles/RegistrationForm.css"

const RegistrationForm = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', user);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="r-div-form">
            <div className="r-inputWrapper">
                <div className="r-form-elem">
                    <div className="r-formLabel">Username</div>
                    <input className="r-textfield" type="text" onChange={handleInputChange} id="username" />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">Email</div>
                    <input className="r-textfield" type="email" onChange={handleInputChange} id="email" />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">Password</div>
                    <input className="r-textfield" type="password" onChange={handleInputChange} id="password" />
                </div>
            </div>

            <NeoButton text="Submit" className="custom-submit" onClick={handleRegister} />
        </div>
    )
};

export default RegistrationForm;
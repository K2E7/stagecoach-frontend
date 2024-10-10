import NeoButton from './NeoButton';
import axios from 'axios';
import { useState } from 'react';
import "./styles/RegistrationForm.css"

const RegistrationForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        if (!user.username || !user.email || !user.password) {
            console.log('Please fill out all fields.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', user);
            console.log('User registered successfully:', response.data);
            // Optionally, redirect the user or display a success message
        } catch (error) {
            console.error('Error registering user:', error.response.data);
            // Handle the error, e.g., display an error message to the user
        }
    };

    return (
        <div className="r-div-form">
            <div className="r-inputWrapper">
                <div className="r-form-elem">
                    <div className="r-formLabel">
                        Username
                    </div>
                    <input className="r-textfield"
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">
                        Email
                    </div>
                    <input className="r-textfield" type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="r-form-elem">
                    <div className="r-formLabel">
                        Password
                    </div>
                    <input
                        className="r-textfield"
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <NeoButton text="Submit" className="custom-submit" onClick={handleRegister} />
        </div>
    )
};

export default RegistrationForm;
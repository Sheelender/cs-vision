import React, { useEffect, useState } from "react"
import './StudentTest.css'

const Login = ({ data, isValid }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')


    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log("id, value", id, value);
        setLoginError('');
        switch (id) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const submitDetail = (event) => {
        event.preventDefault();
        data.map(id => {
            console.log(id[1] + " : " + id[5] + " : " + id[2]);
            if (id[1] === name && id[5] === phone && id[2] === password) {
                isValid(true);
            } else {
                setLoginError('You are not part of the system');
            }
        })
    }

    // console.log("data : ", data);

    return (
        <div className="student">
            <h1>Enter Your Details</h1>
            <form onSubmit={submitDetail}>
                {loginError !== "" && <p style={{ color: 'red' }}>{loginError}</p>}
                <label>Name:</label>
                <input type="text" id="name" value={name} onChange={handleChange} required />
                <div id="nameError" class="error"></div>

                <label>Mobile Number:</label>
                <input type="text" id="phone" value={phone} onChange={handleChange} required />
                <div id="phoneError" class="error"></div>

                <label>Password:</label>
                <input type="text" id="password" value={password} onChange={handleChange} required />
                <div id="passError" class="error"></div>

                <button type="submit">Next</button>
            </form>
        </div >
    )
}

export default Login

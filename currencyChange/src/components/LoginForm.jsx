
import React, { useContext,useState } from 'react';
import { MyContext } from "../context/ContextContainer";
function LoginForm() {
   // const [username, setUsername] = useState('');
   const {username,setUsername}= useContext(MyContext);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (username!==" "&& password.length>=6) {
            setMessage(`you have logged in successfully ${username}`);
        } else {
            setMessage(
                'You have entered a wrong username or password. Please try again.'
            );
        }
    };
    
    const handleForgotPasswordSubmit = (event) => {
        event.preventDefault();
       
    };
    return (
        <div>
            {!showForgotPassword ? (
                <>
                    <h2>Log in</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <br />
                        <br />
                        <input type='submit' value='Log in' />
                        {message && <div>{message}</div>}
                        <br />
                        <br />
                        <a href='#' onClick={() => setShowForgotPassword(true)}>
                            Forgot Password
                        </a>
                    </form>
                </>
            ) : (
                <>
                    <h2>Forgot Password</h2>
                    <p>
                        Enter Account Email To recover your password, please
                        enter your account email address below and confirm
                    </p>
                    <form onSubmit={handleForgotPasswordSubmit}>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                        />
                        <br />
                        <br />
                        <input type='submit' value='Submit Request' />
                    </form>
                </>
            )}
        </div>
    );
}
export default LoginForm;

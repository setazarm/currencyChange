
import React, { useState } from 'react';

const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredUsername = event.target.elements.username.value;
        const enteredPassword = event.target.elements.password.value;

        const validUser = users.find(
            (user) =>
                user.username === enteredUsername &&
                user.password === enteredPassword
        );

        if (validUser) {
            setMessage('You have logged in successfully.');
        } else {
            setMessage(
                'You have entered a wrong username or password. Please try again.'
            );
        }
    };

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
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
                <a href='#'>Forgot Password</a>
            </form>
        </div>
    );
}

export default LoginForm;



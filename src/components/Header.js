import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../auth/authService';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/Login');
    };

    return (
        <header className='header'>
            <h2>Expense Tracker</h2>
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </header>
    );
};

export default Header;

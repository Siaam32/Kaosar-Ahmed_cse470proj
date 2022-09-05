import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import logo from '../../images/Logo.svg';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <h2 id="oka">Astar Ecommerse</h2>
            <div>
                <input type="text" name="search" placeholder='search'/>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/help">Help?</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                    <button style={{margin:"20px"}} onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>}
                
            </div>
        </nav>
    );
};

export default Header;
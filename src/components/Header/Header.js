import React from 'react';

const Header = () => {
    return (
        <div>
            <h1> Welcome to my Rest Countries </h1>
            <nav className='menubar'>
                <a href="/home"> Home </a>
                <a href="/countries"> Countries </a>
                <a href="/menu"> Menu </a>
                <a href="/about"> About </a>
            </nav>
        </div>
    );
};

export default Header;
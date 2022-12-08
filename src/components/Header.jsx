import React from 'react';

const tabs = ['Home', 'About', 'Movie Layout', 'Blog', 'Pages', 'Contacts']

const Header = () => {
    return (
        <div className='header'>
            {
                tabs.map((tab, index) => <span key={index}>{tab}</span>)
            }
        </div>
    );
}

export default Header;
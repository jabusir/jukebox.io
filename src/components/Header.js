import React from 'react';

const Header = (props) => {
     return (   
        <div className="header">
            <div className="header__name" style={{marginLeft: props.location.pathname === '/' ? '140px' : '67px'}}>
                jukebox.io 
            </div>
        </div>
    );
};

export default Header;
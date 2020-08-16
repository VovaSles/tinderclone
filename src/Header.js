import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                </IconButton>
            ):(
                <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            )}
            
            <Link to="/">
                <IconButton>
                    <img className="header__logo" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-512.png" alt="tinder logo" />
                </IconButton>
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>



        </div>
    )
}
export default Header;
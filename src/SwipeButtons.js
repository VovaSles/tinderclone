import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipeButtons.css';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
    return (
        <div className="swipebuttons">
            <IconButton>
                <ReplayIcon className="replay" fontSize="large" />
            </IconButton>
            <IconButton>
                <ClearIcon className="clear" fontSize="large" />
            </IconButton>
            <IconButton>

                < GradeIcon className="star" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="hart" fontSize="large" />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="flash" fontSize="large" />
            </IconButton>


        </div>
    )
}
export default SwipeButtons;
import React from 'react';
import './Chat.css';
import {Link} from 'react-router-dom';


import Avatar from '@material-ui/core/Avatar';


const Chat = ({name, message, timestamp, profilePic}) =>{
    return(
        <Link to={`/chat/${name}`}>
        <div class="chat"> 
<Avatar className="chat__image"  src={profilePic} />
<div className="chat__details" >
    <h2>{name}</h2>
    <p>{message}</p>
</div >
    <p className="timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}
export default Chat;
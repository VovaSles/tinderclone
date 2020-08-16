import React, { useState } from 'react';
import './ChatScreen.css'
import { Avatar } from '@material-ui/core';



const ChatScreen = () => {
const [messages, setMessages] = useState(
   [ {
        name: 'Gal',
        image: 'https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_.jpg',
        message: 'Whats up???'
    },
    {
        name: 'Gal' ,
        image: 'https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_.jpg',
        message: 'Come and get me?'
    },{
        message:"Nice."
    }
   
   ]);
   const [input, setInput] =useState('');

   const submitHandler = e =>{
       e.preventDefault();
       setMessages([...messages, {message: input }]);
       setInput("");
   }

    return(
        <div className="chatscreen" > 
          {messages.map((message)=>(
              message.name? (
                <div className="chat__message">
                <Avatar
                className="chat__avatar"
                src={message.image}
                />
            <p className="chat__text">{message.message}</p>
            </div>
              ):(
                  
             <div className="chat__message">
              <p className="chat__textUser">{message.message}</p>
              </div>
              )
          ))}
          <div >
              <form className="chat__input">
                  <input
                   type="text"
                    className="input" 
                    placeholder="type a message...."
                    onChange={(e)=> setInput(e.target.value)}
                    />
                  <button type="submit" onClick={submitHandler} className="chat__button" >SEND</button>
              </form>
          </div>
        </div>
    );
}
export default ChatScreen
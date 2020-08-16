import React from 'react';
import Chat from './Chat';

const Chats = () =>{
    return(
        <div className="carts">
              <Chat
              name="Gal "
              message="Yooo whats uppp!"
              timestamp="20 sec"
              profilePic="https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_.jpg"
              /> 
                <Chat
              name="Rachel "
              message="Hallo!"
              timestamp="50 sec"
              profilePic="https://gossipgist.com/uploads/28612/rachel-mcadams.png"
              /> 
                <Chat
              name="Beyoncé "
              message="Hi!"
              timestamp="30 sec"
              profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg"
              /> 
                <Chat
              name="Jenifer"
              message="Ola"
              timestamp="20 sec"
              profilePic="https://img.resized.co/spin1038/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDVcXFwvMjExMDM3MzhcXFwvU1BMNTA3NzM2MF8wMDEtZTE1OTAwNTM4NzQ4MjYtMTAyNHg1NDkuanBnXCIsXCJ3aWR0aFwiOjQ1NixcImhlaWdodFwiOjIyOCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LnNwaW4xMDM4LmNvbVxcXC9pbWFnZXNcXFwvbm8taW1hZ2UucG5nXCJ9IiwiaGFzaCI6IjkyOWMyOTBlZjFiMzU0MDhjZTgzZTVjYzM4YmUzM2MzZGE0MmIyZTkifQ==/the-mystery-man-in-the-background-of-j-lo-s-instagram-post-has-been-explained.jpg"
              /> 
        </div>
    )
}
export default Chats;
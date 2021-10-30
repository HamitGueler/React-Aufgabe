import React from "react";


function Card(props) {
    return (
      <div className="card">
          <img src={props.url} alt={props.img_title} className="image"></img>
          <p className="textinfo">Title</p>
          <p className="titel">{props.img_title}</p>
          <p className="textinfo">Album</p>
          <p className="album">{props.album_name} </p>
      </div>
    );
  }
  
  export default Card;
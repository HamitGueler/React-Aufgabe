import React from "react"
import Card from './Card';

function CardGrid({albums, photos}) {
    const card_info = []

    //creating a list of new objects, with the data that was fetched.
    for(var a in albums){
      for(var p in photos){
        if(photos[p].albumId === albums[a].id){
          card_info.push({id: photos[p].id, album_name: albums[a].title, url: photos[p].thumbnailUrl , title: photos[p].title});
        }
      }
    }

    return (
      <div>
      <section className="cardgrid">
          {card_info.map((card) =>{
            return (
              <Card key={card.id} img_title={card.title} album_name={card.album_name} url={card.url}></Card>
              );
          })}
      </section>
      </div>
    );
  }
  
  export default CardGrid;
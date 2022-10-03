import React from "react";
import BotCard from "./BotCard";



function BotCollection({bots, addArmy, deleteBot}) {
  // Your code here
 const addBots=bots.map((bots)=>{
  return <BotCard 
  bot={bots} 
  key={bots.id} 
  clickAdd={addArmy}
  clickDelete={deleteBot} />
 })
return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {addBots}
      </div>
    </div>
  );
}

export default BotCollection;

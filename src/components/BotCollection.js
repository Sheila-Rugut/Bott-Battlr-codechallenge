import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots, addArmy}) {
  // Your code here
 const addBots=bots.map((bot)=>{
  return <BotCard 
  bot={bot} 
  key={bots.id} 
  clickAdd={addArmy} />
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

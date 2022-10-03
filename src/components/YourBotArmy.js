import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, deleteBot,addArmy}) {
  //your bot army code here...
 const addBot=army.map((bot)=>{
  return (
  <BotCard
   key={bot.id}
    bot={bot}
     deleteBot={deleteBot}  />
  )
 })
  return (
    <div className="ui segment inverted olive bot-army" >
      <div className="ui five column grid" >
        <div className="row bot-army-row" >
          {/*...and here...*/}
          Your Bot Army
          {addBot}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

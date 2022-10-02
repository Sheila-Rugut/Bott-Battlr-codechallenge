import React from "react";


function BotCollection({bots}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map(bot=> (<span key={bot.id}><img src={bot.avatar_url} alt="Bot"/></span>))}
      </div>
    </div>
  );
}

export default BotCollection;

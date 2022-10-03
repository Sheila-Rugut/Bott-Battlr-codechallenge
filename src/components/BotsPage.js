//import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import React,{useState,useEffect}from 'react'

function BotsPage() {
  //start here with your code for step one
  const[bots, setBots]=useState([])
  const [army, setArmy] = useState([]);

  
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
        .then((r) => r.json())
        .then((bots) => {
          console.log(bots)
          setBots(bots)});
  }, []);
  function addArmy(bot){
    const botInArmy = army.find((selectedBot) => {
      return selectedBot.id === bot.id;
    });
    if (!botInArmy) {
      setArmy([...army, bot])
    }
  }
  return (
    <div>
      <YourBotArmy army={army} />
      <BotCollection bots={bots}
      addArmy={addArmy}/>
    </div>
  )
}

export default BotsPage;

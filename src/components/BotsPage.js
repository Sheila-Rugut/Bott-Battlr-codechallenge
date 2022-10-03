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
      return selectedBot === bot;
    });
    if (!botInArmy) {
      setArmy([...army, bot])
    }
  }
  function deleteBot(botInCollection) {
    if (bots.find((bot) => bot === botInCollection)) {
      setBots(bots.filter((bot) => bot !== botInCollection));
      setArmy(army.filter((bot) => bot !== botInCollection));
      fetch(`http://localhost:8002/bots/${botInCollection.id}`, {
        method: 'DELETE'
      });
    }
  }
  return (
    <div>
      <YourBotArmy army={army}
      deleteBot={deleteBot} />
      <BotCollection bots={bots}
      addArmy={addArmy}
      deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage;

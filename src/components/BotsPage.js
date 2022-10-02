//import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import React,{useState,useEffect}from 'react'

function BotsPage() {
  //start here with your code for step one
  const[bots, setBots]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
        .then((r) => r.json())
        .then((bots) => {
          console.log(bots)
          setBots(bots)});
  }, []);
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  )
}

export default BotsPage;

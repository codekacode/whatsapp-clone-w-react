import {Avatar, IconButton} from "@mui/material"
import { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({id, name, addNewChat}) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("Introduce your name for chat");
    if(roomName){
      //do some clever database stuff
    }
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}
    className="sidebarChat"
    >
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
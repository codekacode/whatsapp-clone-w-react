import {Avatar} from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";

function SidebarChat({addNewChat, id, name}) {
  const [seed, setSeed] = useState("");
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("Introduce your name for chat");
    if(roomName){
      db.collection('rooms').add({
        name: roomName,
      })
    }
  }

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat}
    className="sidebarChat"
    >
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
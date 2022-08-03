import {Avatar} from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";

function SidebarChat({addNewChat, id, name}) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    if (id) {
      db.collection("rooms").doc(id).collection("messages").orderBy("time", "desc").onSnapshot(
        (snapshot) => setMessages(snapshot.docs.map((doc)=> doc.data()))
      )
    }
  },[id])

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
          <p>{messages[0]?.message}</p>
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
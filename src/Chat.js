import {Avatar, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState } from "react";
import "./Chat.css"
import { useParams } from "react-router-dom";
import db from "./firebase";
import { doc } from "@firebase/firestore";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(roomId) {
      db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName
      (snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .onSnapshot((snapshot) => 
          setMessages(snapshot.docs.map(doc => doc.data()))
        )
      }
      
    },[roomId])
    
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input)
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) =>(
          <p className={`chat__message  ${ true && "chat__receiver"}`}> 
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{new Date(message.time?.toDate()).toUTCString()}</span>
        </p>
        ))}
        
      </div>
      <div className="chat__footer">
        <TagFacesIcon/>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}type="text" placeholder="Type a message"/>
          <button onClick={sendMessage}type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
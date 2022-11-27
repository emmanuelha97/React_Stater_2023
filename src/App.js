//noinspection JSIgnoredPromiseFromCall

import {useEffect, useState, useContext} from "react";

import axios from "axios";
import ChatRoom from './components/ChatRoom'
import MessageContext from './context/messageActions'

function App() {

  const {messages, setMessages} = useContext(MessageContext)
  const [users, setUsers] = useState([])

  const fetchMessages = async () => {
    const response = await axios.get('http://127.0.0.1:5000/messages');
    setMessages(response.data.messages)
  };

  useEffect(()=> {
    fetchMessages()
  }, [])

  const createUser = (name, username) => {
    const newUser = {
      name, username
    }
    // check if user is already there?
    setUsers([...users, newUser])
  }


  return (
    <div>
        <ChatRoom messages={messages} createUser={createUser} />
    </div>
  );
}

export default App;

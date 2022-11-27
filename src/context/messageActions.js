import {createContext, useState} from "react";
import axios from "axios";

const MessageContext = createContext();

function Provider({children}){
  const [messages, setMessages] = useState([ ])

  const createMessage = (sentFrom, sentTo, message) => {

    const newMessage = {sentFrom, sentTo, message}
    console.log(newMessage)
    //const response = await axios.post("http://127.0.0.1:5000/messages", {
    //  newMessage
    //})

    const updatedMessages = [
      ...messages,
      newMessage
      //response.data
    ];
    setMessages(updatedMessages)
    console.log("These are the Updatedmessages ", updatedMessages)
    console.log("These are the messages ", messages)
  }


  const editMessage = (messageId, newMessageData) => {

  }

  const deleteMessage = (messageId) => {

  }

  const messageActions = {
    messages,
    setMessages,
    createMessage
  };

  return(
    <MessageContext.Provider value={messageActions}>
      {children}
    </MessageContext.Provider>
  )
}

export {Provider}
export default MessageContext
import {useState, useContext} from "react";
import Message from './Message'
import MessageContext from "../context/messageActions";

function ChatRoom() {
  const [message, setMessage] = useState('my message')
  const [messageFrom, setMessageFrom] = useState('foo')
  const [messageTo, setMessageTo] = useState('bar')
  const {messages, createMessage} = useContext(MessageContext)

  const renderMessages = messages.map((message, index) => {
    return <Message messageData={message} key={index} />
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Send Message Called: Message: ', message)
    createMessage(messageFrom, messageTo, message)

  }

  const handleTextChange = (event) => {
    setMessage(event.target.value)
  }

  const handleFromChange = (event) => {
    setMessageFrom(event.target.value)
  }

  const handleToChange = (event) => {
    setMessageTo(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {messages.length === 0 ?
            "No messages" : renderMessages}
        </div>
        <div>
          <label>From</label>
          <input value={messageFrom} onChange={handleFromChange}/>
          <label>To</label>
          <input value={messageTo} onChange={handleToChange}/>
          <label>Message</label>
          <input value={message} onChange={handleTextChange}/>
          <button>Send Message </button>
        </div>
      </form>
    </>

  )
}

export default ChatRoom
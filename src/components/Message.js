function Message({messageData}) {
  return (
    <div>
      <p>Sent From:{messageData.sentFrom}</p>
      <p>Sent To:{messageData.sentTo}</p>
      <p>Message:{messageData.message}</p>
    </div>
  )
}

export default Message
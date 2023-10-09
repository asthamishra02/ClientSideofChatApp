import React from 'react';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatContainer from './ChatContainer';
// ChatContainer


const Chat = ({ user, message , setMessage }) => {
  return (
    <>
      <ChatContainer>
      <ChatHeader user = {user} />
      <ChatInput  message={message} setMessage = {setMessage} />
      </ChatContainer>
      

    </>

  ) 
}
export default Chat;
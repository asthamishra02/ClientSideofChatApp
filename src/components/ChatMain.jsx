import React from 'react';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatContainer from './ChatContainer';
// ChatContainer


const Chat = ({ user, message , messages, setMessage }) => {
  return (
    <>
      <ChatContainer>
      <ChatHeader user = {user} />
      <div className='positon-relative chat-height overflow auto'>
        <div className=' d-flex flex-column p-4'>
          {messages.map((message,index)=>{
              return message.type === "UserStatus" ? <div key={index} className='text-center'> 
              <span className='badge bg-info'>
                {message.userId === user.userId ? "You have Joined!" : `${message.username} has Joined!`}
              </span>
              </div> : null 

          })}

        </div>
      </div>
      <ChatInput  message={message} setMessage = {setMessage} />
      </ChatContainer>
      

    </>

  ) 
}
export default Chat;
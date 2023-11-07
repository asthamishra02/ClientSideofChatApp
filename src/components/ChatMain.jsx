import React from 'react';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatContainer from './ChatContainer';
import ReactScrollableFeed from "react-scrollable-feed";


const Chat = ({ user, message , messages, setMessage, sendMessage }) => {
  // console.log(" user =>" , user)
  // console.log(message)
  return (
    <>
      <ChatContainer>
      <ChatHeader user = {user} />
      <div className='positon-relative overflow-auto scroll'>
        <ReactScrollableFeed  >
           
        
        <div className=' d-flex flex-column p-4'>
        {/* <ReactScrollableFeed> */}
          {messages.map((userMessage,index)=>{
              // console.log("usermessage => ",userMessage)
              return userMessage.type === "UserStatus" ? (<div key={index} className='text-center'> 
              <span className='badge bg-info'>
                {userMessage.userId === user.userId ? "You have Joined!" : `${userMessage.username} has Joined!`}
              </span>
              </div> ) : (
                <div key = {index} className={userMessage.userId === user.userId ? "chat-userMessage-right pb-4" : 
                "chat-userMessage-left pb-4"}
                >
                  {/* <div className="text-muted small text-nowrap mt-2">
                    12:00 AM
                  </div> */}
                  <div className='flex-shrink-1 bg-light rounded py-2 px-3 ml-3'>
                    <div className='font-weight-bold mb-1'>
                      {userMessage.userId === user.userId ? "You" : userMessage.username}
                    </div>
                    {userMessage.message}
                  </div>
                </div>
              ) ;
             

              

          } ) }
    {/* </ReactScrollableFeed> */}
        </div>
        </ReactScrollableFeed>
      </div>
      {/* </ReactScrollableFeed> */}
      <ChatInput  message={message} 
      setMessage={setMessage} 
      sendMessage = {sendMessage} />
      </ChatContainer>
      

    </>

  ) 
}
export default Chat;
import React from "react";
const ChatInput = ( {message , setMessage , sendMessage} ) => {
        return (
            <div className="align-items-end border-info py-3 px-4 border-top d-lg-block input-block">
            <div className='input-group flex-fill'>
              <input
                type="text"
                className='form-control'
                name="message"
                value={message}
                placeholder='Type a message...'
                onChange={({currentTarget:input}) => setMessage(input.value)}
                onKeyDown={(e) => e.code === "Enter" ? sendMessage():null}
              />
              <button className='btn btn-info' onClick = {sendMessage}>Send</button>
            </div>
          </div>
        );
};
export default ChatInput;



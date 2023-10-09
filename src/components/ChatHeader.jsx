import React from 'react';
const ChatHeader = ({user}) =>{
    return (
        <div className="align-items-start py-2 px-4 w-100 border-bottom border-info  d-lg-block sticky-top bg-white">
        <div className="d-flex align-items-center py-1">
          <div className="position-relative"></div>
          <div className="flex-grow-1">
            <strong>
              Logged in as {user}
            </strong>
          </div>

        </div>
      </div>

    )
}
export default ChatHeader;
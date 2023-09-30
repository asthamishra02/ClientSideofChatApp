import React from 'react';
const Chat = ({user}) => {
    return 
    (
        <>
        <div className="card border-2 border-info w 100">
        <div className="row vh-95">
        <div className="col-lg-12 col-xl-12">
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
          <div className="align-items-end border-info py-3 px-4 border-top d-lg-block">
            <div className='input-group flex-fill'>
            <input 
            type = "text" 
            className='form-control' 
            name="messgae" 
            placeholder='Type a message...' 
            />
            <button className='btn btn-info'>Send</button>
            </div>
          </div>
          </div>
          </div>
          </div>


          </>
        
          )
}
export default Chat;
import React, {useState,useEffect} from "react";
import Login from "./Login";
import Chat from "./ChatMain";


const Main = ({socket}) => {
  // console.log(socket)
    const[newUser,setNewUser] = useState("");
    const [user,setUser] = useState({});
    const[message,setMessage] = useState("");
    const[messages,setMesaages] = useState([]);

    useEffect(() =>{
      socket.on("users", (users)=> {
        const messageArr = [];
        for(const {userId,username}  of users){
          const newMessage = { type:"UserStatus", userId , username};
          messageArr.push(newMessage)
        }
        setMesaages([...messages,...messageArr]);
        // setUser(users);
       
      }) 
      socket.on("session",({userId,username}) => { 
          setUser({userId,username});
      });
      socket.on("user connected" , ({userId,username}) =>{
        const newMessage = { type:"UserStatus", userId,username};
        setMesaages([...messages,newMessage]);
      });
      socket.on("new message",({userId, username, message}) =>{
        // console.log(userId,username,message)
        const newMessage = { type: "message" , 
        userId, 
        username,
        message, 
      };

        setMesaages([...messages,newMessage]);
      })
    },[socket,messages]); 

    function handleChange ({currentTarget:input}){
            setNewUser(input.value);
          }
        function logNewUser () {
          setUser(newUser);
          socket.auth = {username:newUser}
          socket.connect(); 
        }
        function sendMessage(){
          socket.emit("new message" , message);

          const newMessage = { type: "message" , 
          userId: user.userId, 
          username: user.username,
          message,
        };
          setMesaages([...messages,newMessage]); 
          setMessage("");
        }
        
    return (
        <>
        <main className="content">
        <div className="container mt-3">
          {user.userId && 
          <Chat 
           user = {user}
           message={message}
           messages={messages}
           setMessage={setMessage}
           sendMessage={sendMessage}
           />
          }
            
          {!user.userId &&
              (<Login
                newUser={newUser} 
                handleChange={handleChange} 
                logNewUser={logNewUser}
                />
              )
          }
         
        </div>
      </main>
    </>
    )
} 
export default Main;
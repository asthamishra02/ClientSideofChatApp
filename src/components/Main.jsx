import React, {useState,useEffect} from "react";
import Login from "./Login";
import Chat from "./ChatMain";

const Main = ({socket}) => {
  console.log(socket)
    const[newUser,setNewUser] = useState("");
    const [user,setUser] = useState({});
    const[message,setMessage] = useState("");
    const[messages,setMesaages] = useState([]);

    useEffect(() =>{
      socket.on("users", (users)=> {
        const messageArr = [];
        for(const {userId,username}  of users){
          const newMessage = { type:"UserStatus", userId,username};
          messageArr.push(newMessage)
        }
        setMesaages([...messages,messageArr]);
        setUser(users);
       
      }) 
      socket.on("session",({userId,username}) => {
          setUser({userId,username});
      });
      socket.on("user connected" , ({userId,username}) =>{
        const newMessage = { type:"UserStatus", userId,username};
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
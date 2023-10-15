import React, {useState,useEffect} from "react";
import Login from "./Login";
import Chat from "./ChatMain";

const Main = ({socket}) => {
  console.log(socket)
    const[newUser,setNewUser] = useState("");
    const [user,setUser] = useState("");
    const[message,setMessage] = useState("");
    // const[messages,setMesaages] = useState([]);

    useEffect(() =>{
      socket.on("users", (users)=>{
        console.log(users);

      })
      socket.on("session",({userId,username}) => {
          setUser(username);
      });
    },[socket]); 

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
          {user && 
          <Chat 
           user = {user}
           message={message}
           setMessage={setMessage}
           />
          }
            
          {!user &&
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
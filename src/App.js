// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
// import {io} from "socket.io-client";
import React , {useState} from "react";
// import Login from "./components/Login";
function App() {
  const[newUser,setNewUser] = useState("");
  const [user,setUser] = useState("");
          function handleChange ({currentTarget:input}){
              setNewUser(input.value);
            }
          function logNewUser () {
                  setUser(newUser);
          }
          function logNewUser(){
            setUser(newUser);
          }
  return (
    <main className="content">
      <div className="container mt-3">
        {user && (<div className="card border-2 border-info w 100">
                  <div className="row vh-95">
                  <div className="col-lg-12 col-xl-12">
                  <div className="align-items-start py-2 px-4 w-100 border-bottom border-info  d-lg-block sticky-top bg-white">
                    <div className="d-flex align-items-center py-1">
                      <div className="position-relative"></div>
                      <div className="flex-grow-1">
                              <strong>
                                Logged in as akkad bakkad {user}
                              </strong>
                      </div>

                      </div>
                    
                    
                    </div>
                      <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block input-block">
                      <div className="input-group flex-fill"></div>
                      <input type ="text" 
                       className="form-control" 
                       name="message" 
                       value =""
                       placeholder = "Type your message..." 
                       />
                       <button className="btn btn-info">Send</button>

                      </div>

                    </div>
                    </div>
                </div>)
          }
        {!user &&
            <div className="card w-100 text-center border-white">
            <div className="row">
                <div className="col-12">
                    <h5>Please Enter Username</h5>
                </div>
                <div className="d-flex justify-content-center py-1">
                    <div className="col-4">
                        <input
                            type="text"
                            name="username"
                            value={newUser}
                            className="form-control mb-3"
                            placeholder="Username"
                            autoComplete="off"
                            onChange={handleChange}
                            onKeyDown={(e) => (e.code === "Enter" ? logNewUser() : null)}

                        />
                        <button className="btn btn-success w-100" onClick={() => logNewUser()}>Join!!</button>

                    </div>

                </div>
            </div>
        </div>
        }
       
      </div>
      </main>

  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
// import styles from "../styles/Chats.module.css";
// const ENDPOINT = "http://127.0.0.1:3000";
// const socket = socketIOClient(ENDPOINT);


// function Chat() {
//     const [user, setUser] = useState({
//         usersList: null,
//     });
//     const username = {
//         id: "46464ad8ad4",
//         name: "ashish bhagat",
//     };
//     const [msg, setMsg] = useState("");
//     const [recMsg, setRecMsg] = useState({
//         listMsg: [],
//     });
//     const [loggedUser, setLoggedUser] = useState();

//     useEffect(() => {
//         // subscribe a new user
//         console.log("here");
//         socket.emit("login", username.name);
//         // list of connected users
//         socket.on("users", (data) => {
//             setUser({ usersList: JSON.parse(data) });
//         });
//         socket.on("now", (e) => {
//             console.log(e, "h");
//         });
//         socket.emit("try", "data");

//         // we get the messages
//         socket.on("getMsg", (data) => {
//             let listMessages = recMsg.listMsg;
//             listMessages.push(JSON.parse(data));
//             setRecMsg({ listMsg: listMessages });
//         });
//     }, []);

//     // to send a message
//     const sendMessage = () => {
//         socket.emit("sendMsg", JSON.stringify({ id: loggedUser.id, msg: msg }));
//     };

//     // get the logged user
//     socket.on("connecteduser", (data) => {
//         setLoggedUser(JSON.parse(data));
//     });

//     return (
//         <div>
//             {/* <h3 className="d-flex justify-content-center"> Connected users : {user.usersList?.length} </h3>
//       <table className="table">
//         <thead>
//           <tr>
//             <th> User name </th>
//             <th> Connection Date </th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.usersList?.map(user => {
//             return (<tr key={user.id}>
//               <td> {user.userName} </td>
//               <td> {user.connectionTime} </td>
//             </tr>)
//           })}
//         </tbody>
//       </table> */}
//             {/* <h3 className={styles.container}>
//                 {" "}
//                 User : {loggedUser?.userName}{" "}
//             </h3> */}
//             <div className = {styles.chat_box}>
//                 <div
//                 >
//                     <h2 style  = {{margin: "1% auto", textAlign: "center"}}> Chat </h2>
//                     {recMsg.listMsg?.map((msgInfo, index) => {
//                         return (
//                             <div
//                                 className={styles.container}
//                                 key={index}
//                             >
//                                 {" "}
//                                 <b>{msgInfo.userName} </b> : {msgInfo.msg}{" "}
//                                 <small
//                                     style={{
//                                         marginLeft: "18px",
//                                         color: "blue",
//                                         marginTop: "5px",
//                                     }}
//                                 >
//                                     {" "}
//                                     {msgInfo.time}{" "}
//                                 </small>{" "}
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className={styles.input_div}>
//                     <input
//                         style={{ width: "70%", display: "inline" }}
//                         id="inputmsg"
//                         onChange={(event) => setMsg(event.target.value)}
//                     />
//                     <button
//                         className={styles.button}
//                         id="btnmsg"
//                         onClick={() => {
//                             sendMessage();
//                         }}
//                     >
//                         {" "}
//                         Send{" "}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Chat;

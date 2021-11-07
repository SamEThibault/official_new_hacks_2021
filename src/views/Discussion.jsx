// import React from "react";
// import Button from "@mui/material/Button";
// import "../styles/discussion.css";
// import Nav from "../views/Nav";

// function Discussion() {
//   return (
//     <div className="DiscussionMain">
//       <Nav />
//       <div className="NewPostBtn">
//         <h1>Discussion Board</h1>
//         <Button
//           variant="contained"
//           style={{
//             background: "#1f3a60",
//             height: "90%",
//             width: "90%",
//           }}
//         >
//           Post Message
//         </Button>
//       </div>

//       <div className="TextBox">
//         <textarea
//           style={{
//             position: "fixed",
//             top: 230,
//             width: 600,
//             height: 300,
//             left: 10,
//           }}
//         >
//           Type your message here...{" "}
//         </textarea>
//       </div>
//     </div>
//   );
// }

// export default Discussion;

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/discussion.css';

function Discussion() {

    // const [text, setText] = useState(null)

    // function getData(val) {
    //     setText(val.target.value)
    // }

    return (
        <div className="DiscussionStyle">
            <h1 className="Header">Discussion Board</h1>

            <div className="DiscussionInput">
                <TextField className="TxtBox"
                    // Onchange={getData}
                    variant="outlined"
                    color="secondary"
                    id="outlined-multiline-flexible"
                    label="Enter your message here:"
                    multiline
                    maxRows={6}></TextField>

                <Button className="btn" variant="contained">Post Message</Button>
            </div>

            <div
                className="DiscussionOutput">
                <h2 className="PostsHeader" >View Posts:</h2>
                {/* <h5 className="PostText">{text}</h5> */}

            </div>
        </div>
    );
}

export default Discussion;

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

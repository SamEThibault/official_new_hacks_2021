import React from "react";
import '../App.css';

function PageNotFound() {
    return (
        <div className="App">
                <img style={{marginTop: 200}} src="https://lh3.googleusercontent.com/proxy/4raG6QNQIm_3VosysWfrAFNDbmGVcwNjWvfxHqJzfpzMIK2HxNjcpLc9W6oJQ3HzWt5Jg2PEP-JrU_OZIh_OQcP7dOOCaCLqUr8njbEma8Ttf8IWV8SnG8yBuH7TGbERtgKqbA8XU9jIh2t01mHWyiCj"
                    width="200"
                    height="200"
                    
                    />
                <div id="info">
                    <h1 style={{marginTop:80, fontSize: 60}}>404</h1>
                    <h3>This page could not be found</h3>
                    <p>The page you are looking for does not exist.<br />Please go back</p>
                </div>
        </div>
    );
}

export default PageNotFound;
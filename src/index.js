import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="webfork-028989.us.auth0.com"
      clientId="hbmmXaDg7VwgVq8LmrE9tLFYHZlAGWux"
      redirectUri={window.location.origin}
      audience="webfork"
      scope="read:openid read:profile read:email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

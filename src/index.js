import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
},1000);


reportWebVitals();


/* Import */
import React from "react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import App from "@/App.tsx";
import GlobalStyle from "@assets/styles/GlobalStyle";
import Theme from "@assets/styles/Theme";

// ----------------------------------------------------------------------------------------------------

/* Main Page */
ReactDOM.createRoot(document.getElementById("root")!).render(
   // <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <Global styles={GlobalStyle} />
            <App />
        </ThemeProvider>
  //  </React.StrictMode>,
);

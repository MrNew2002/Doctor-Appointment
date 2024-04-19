import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
const supabase = createClient(
  "https://urgmyrdxgqfnhnlcyyug.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZ215cmR4Z3FmbmhubGN5eXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0OTIwNzYsImV4cCI6MjAyOTA2ODA3Nn0.MJojhu-SG9U0xgQyn-5v-KED1jcV_irKhuFjJkVxiYM"
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SessionContextProvider supabaseClient={supabase}>
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose="3000"
            closeOnClick
            pauseOnHover={false}
          />
          <App />
        </SessionContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

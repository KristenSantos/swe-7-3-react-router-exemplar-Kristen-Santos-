// Best Practice: Import ReactDOM from "react-dom/client" for concurrent rendering
import ReactDOM from "react-dom/client";

// Best Practice: Import global styles early to ensure consistent styling across the app
import "./index.css";

// Best Practice: Import the main App component which serves as the entry point
import App from "./App";

// Best Practice: Import BrowserRouter to enable routing throughout the application
import { BrowserRouter } from "react-router-dom";

// Best Practice: Use ReactDOM.createRoot for improved performance with React 18+ concurrent mode
const root = ReactDOM.createRoot(document.getElementById("root"));

// Best Practice: Wrap the entire app inside BrowserRouter to enable routing across the application
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

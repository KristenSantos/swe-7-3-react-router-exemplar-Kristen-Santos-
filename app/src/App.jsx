/* 
  The App component serves as the root component of the application.
  It establishes the routing structure and manages the different pages 
  users can navigate to within the app.
*/

/* eslint-disable no-unused-vars */ // Best Practice: Disable unused variable warnings only if necessary

// Best Practice: Import all page components at the top for clear structure and easy maintenance
import BotSpecsPage from "./pages/BotSpecsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BotPage from "./pages/BotsPage";

// Best Practice: Import routing components from react-router-dom to define navigation paths
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* 
        Best Practice: Use <Routes> to wrap all route definitions 
        Ensures proper routing behavior in React Router v6
      */}
      <Routes>
        {/* 
          Best Practice: Define explicit paths for each page component 
          "/" -> Renders the BotPage (homepage)
          "/robots/:id" -> Renders BotSpecsPage with dynamic ID parameter
          "*" -> Catches all unknown routes and renders NotFoundPage
        */}
        <Route path="/" element={<BotPage />} />
        <Route path="/robots/:id" element={<BotSpecsPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Handles 404 pages */}
      </Routes>
    </div>
  );
};

export default App;

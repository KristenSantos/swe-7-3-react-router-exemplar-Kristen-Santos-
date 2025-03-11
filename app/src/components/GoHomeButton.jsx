// Best Practice: Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    // Best Practice: Use <Link> to handle client-side navigation without a full page reload
    <Link to="/">
      {/* 
        Best Practice: Use a button inside <Link> to provide a clear call-to-action for users 
        - "ui button fluid" ensures consistent styling and responsiveness
      */}
      <button className="ui button fluid">Go Home</button>
    </Link>
  );
};

export default GoHomeButton;

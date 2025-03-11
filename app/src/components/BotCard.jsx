// Best Practice: Import necessary dependencies at the top
import BotClassIcon from "./BotClassIcon";
import { useNavigate } from "react-router-dom";

const BotCard = ({ robot }) => {
  // Best Practice: useNavigate hook allows programmatic navigation without using <Link>
  const navigate = useNavigate();

  // Best Practice: Define the click handler separately for readability and maintainability
  const handleClick = () => {
    console.log(`Navigating to robot ${robot.id}`); // Logs navigation event for debugging
    navigate(`/robots/${robot.id}`); // Navigates to the robot's details page dynamically
  };

  return (
    // Best Practice: Attach the onClick handler to the entire card to make it a clickable element
    <div
      className="ui card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        {/* Best Practice: Always provide an alt attribute for accessibility */}
        <img alt={robot.name} src={robot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {/* Best Practice: Display bot name with its corresponding class icon */}
          {robot.name} {BotClassIcon(robot.bot_class)}
        </div>

        <div className="meta">
          {/* Best Practice: Use <small> for secondary text like a catchphrase */}
          <small>{robot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        {/* Best Practice: Use icons for visual representation of stats */}
        <span>
          <i className="icon heartbeat" />
          {robot.health}
        </span>
        <span>
          <i className="icon lightning" />
          {robot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {robot.armor}
        </span>
      </div>
    </div>
  );
};

export default BotCard;

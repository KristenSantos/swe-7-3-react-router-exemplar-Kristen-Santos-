// Best Practice: Import necessary React hooks and dependencies at the top
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Best Practice: Import components used for handling different states
import NotFoundPage from "../pages/NotFoundPage";
import CouldNotLoadData from "./CouldNotLoadData";
import BotClassIcon from "./BotClassIcon";

// Best Practice: Import the data-fetching function from the adapters folder
import { getRobotById } from "../adapters/robotAdapters";

const BotSpecs = () => {
  // Best Practice: Extract the robot ID from the URL using useParams()
  const { id } = useParams();

  // Best Practice: Use state to store robot data and handle errors
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Best Practice: Define an asynchronous function inside useEffect to fetch robot data
    const fetchRobot = async () => {
      setError(null); // Reset error state before fetching

      try {
        const data = await getRobotById(id);
        if (!data || data.length === 0) {
          setRobot(null); // No robot found, trigger NotFoundPage
        } else {
          setRobot(data[0]); // Set the first robot object if data is an array
        }
      } catch (err) {
        setError(err); // Capture any errors and set the error state
      }
    };

    fetchRobot();
  }, [id]); // Dependency array ensures re-fetching when ID changes



  // Best Practice: Show an error page if data fetching fails
  if (error) {
    return <CouldNotLoadData />;
  }

  // Best Practice: Show a "not found" page if no robot data is available
  if (!robot) {
    return <NotFoundPage />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            {/* Best Practice: Ensure accessibility by providing a meaningful alt text */}
            <img
              alt={robot.name}
              className="ui medium circular image bordered"
              src={robot.avatar_url}
            />
          </div>
          <div className="four wide column">
            {/* Best Practice: Display robot's details dynamically */}
            <h2>Name: {robot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {robot.catchphrase}
            </p>
            <strong>
              Class: {robot.bot_class} {BotClassIcon(robot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  {/* Best Practice: Use icons to visually represent robot attributes */}
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{robot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{robot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{robot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BotSpecs;

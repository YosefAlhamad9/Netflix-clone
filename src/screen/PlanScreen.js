import { useState } from "react";
import "./PlanScreen.css";

const PlanScreen = () => {
  const [plan, setPlan] = useState([
    { name: "Preimum", description: "4K + HDR", isCorrect: false },
    { name: "Basic", description: "720p", isCorrect: false },
    { name: "Standard", description: "1080p", isCorrect: true },
  ]);

  return (
    <div className="planScreen">
      {plan.map((item) => {
        return (
          <div
            className={`${
              item.isCorrect ? "planScreen__plan__disabled" : "planScreen__plan"
            }`}
          >
            <div className="planScreen__info">
              <h5>{item.name}</h5>
              <h6>{item.description}</h6>
            </div>
            <button>{item.isCorrect ? "Current Package" : "Subscribe"}</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;

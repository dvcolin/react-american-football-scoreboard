import React, { useState } from "react";
import "./App.css";

const ScoreButtons = props => {
const [homeScore, setHomeScore] = useState(14);
const [awayScore, setAwayScore] = useState(6);
  return (
    <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setLionsScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setLionsScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setTigersScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button  onClick={() => setTigersScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
  );
};

export default ScoreButtons;

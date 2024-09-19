import React, { useContext } from "react";

import { QuizContext } from "../Helpers/Contexts";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <button onClick={() => setGameState("quiz")}>Start Button</button>
    </div>
  );
};

export default MainMenu;

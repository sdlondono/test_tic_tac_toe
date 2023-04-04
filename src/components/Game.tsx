import type { UserType } from "@/types/User";
import { useState, useEffect } from "react";
import Square from "./Square";
type GameProps = {
  userType: UserType;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
};
const Game: React.FC<GameProps> = ({ userType, setUserType }) => {
  const [board, setBoard] = useState(
    new Array(9).fill({ userType: undefined })
  );
  const [item, setItem] = useState<number | undefined>(undefined);
  console.log(userType);

  useEffect(() => {
    if (item === undefined) return;
    setBoard((prev) => {
      let newBoard = [...prev];
      newBoard[item] = { userType };
      return newBoard;
    });
  }, [userType, item]);

  return (
    <div className="game grid grid-cols-3 bg-white rounded-[20px] drop-shadow-xl p-2">
      {board.map((item, i) => (
        <div key={i}>
          <Square
            userType={userType}
            item={item.userType}
            setUserType={setUserType}
            setItem={setItem}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};

export default Game;

import type { UserType } from "@/types/User";
import { useState } from "react";
type SquareProps = {
  userType: UserType;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  setItem: React.Dispatch<React.SetStateAction<number | undefined>>;
  index: number;
  item: UserType | undefined;
};

const Square: React.FC<SquareProps> = ({
  userType,
  setUserType,
  setItem,
  index,
  item,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setUserType(userType === 1 ? 2 : 1);
    setIsClicked(!isClicked);
    setItem(index);
  };
  const result = isClicked ? (item === 1 ? "X" : "O") : undefined;
  return (
    <div
      className="border w-20 h-20 cursor-pointer text-center flex items-center justify-center"
      onClick={onClick}
    >
      <h1 className="text-2xl">{result}</h1>
    </div>
  );
};

export default Square;

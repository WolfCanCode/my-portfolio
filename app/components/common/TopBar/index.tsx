import { ButtonStart } from "./buttonStart";
import { DateTime } from "./dateTime";

export const TopBar = () => {
  return (
    <div className="top-0 z-50 h-10 bg-gray-50/20 backdrop-blur-md flex flex-row justify-between shadow-sm">
      <ButtonStart />
      <DateTime />
    </div>
  );
};

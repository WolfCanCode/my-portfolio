import { ButtonStart } from "./buttonStart";
import { DateTime } from "./dateTime";

export const TopBar = () => {
  return (
    <div className="fixed left-0 top-0 w-screen z-100 h-[length:40px] bg-gray-50/20 backdrop-blur-md flex flex-row justify-between shadow-sm">
      <ButtonStart />
      <DateTime />
    </div>
  );
};

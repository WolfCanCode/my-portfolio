import dayjs from "dayjs";

export const DateTime = () => {
  return (
    <div className="px-4 justify-center flex h-full cursor-default">
      <div className="text-black text-sm h-full  text-center items-center flex justify-center">
        {dayjs().format("ddd DD MMM HH:mm")}
      </div>
    </div>
  );
};

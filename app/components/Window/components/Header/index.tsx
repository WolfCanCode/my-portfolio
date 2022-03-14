import React from "react";
import { DraggableCore } from "react-draggable";
import { Draggable } from "~/components/Window/components/Header/Draggable";

export const WindowHeader = ({
  children,
  id,
}: {
  children: string;
  id: number;
}) => {
  return (
    <Draggable id={id}>
      <div className={"relative h-6 flex flex-row"}>
        <div className={"flex flex-row gap-1 px-1"}>
          <button
            aria-label={"close"}
            className={
              "rounded-full w-3 h-3 bg-red-500 hover:bg-red-400 m-auto"
            }
          />
          <button
            aria-label={"minimize"}
            className={
              "rounded-full w-3 h-3 bg-orange-500 hover:bg-orange-400 m-auto"
            }
          />
          <button
            aria-label={"expand"}
            className={
              "rounded-full w-3 h-3 bg-green-500 hover:bg-green-400 m-auto"
            }
          />
        </div>
        <div className={"ml-1 select-none"}>
          <h1>
            {children} - {id}
          </h1>
        </div>
      </div>
    </Draggable>
  );
};

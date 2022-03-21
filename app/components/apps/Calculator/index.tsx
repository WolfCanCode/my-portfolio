import React from "react";

export const Calculator = () => {
  return (
    <div className="h-full h-full">
        <iframe
          title="calculator"
          width="100%"
          height="90%"
          src="https://vue-calculate.netlify.app/"
          scrolling="no"
          frameBorder="0"
        />
      <div className={"text-center mt-1 h-[length:10%]"}>
        Made by{" "}
        <a
          className={"text-center text-blue-600"}
          href="https://github.com/willnguyen1312/"
          aria-label={"Will Nguyen Github Link"}
        >
          Will Nguyen (Nam Nguyen)
        </a>
      </div>
    </div>
  );
};

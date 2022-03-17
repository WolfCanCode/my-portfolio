import React from "react";

export const Calculator = () => {
  return (
    <div>
      <iframe
        width="360"
        height="410"
        src="https://vue-calculate.netlify.app/"
        scrolling="no"
        frameBorder="0"
      ></iframe>
      <div className={"text-center mt-1 "}>
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

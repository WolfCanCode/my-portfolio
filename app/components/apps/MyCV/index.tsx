import React from "react";

export const MyCV = () => {
  return (
    <div className="h-full h-full">
      <div className="h-full w-full z-[length:-1] absolute left-0 top-15">
        Loading ...
      </div>
      <iframe
        title="My-CV"
        width="100%"
        height="98%"
        src="https://docs.google.com/gview?url=https://www.docdroid.net/file/download/JgwOytd/le-ngoc-truong-tommy-topcvvn-210322173131-pdf.pdf&embedded=true"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

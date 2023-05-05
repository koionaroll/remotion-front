import React from "react";

function Footer() {
  return (
    <div className="text-secondary p-4 text-sm tablet:text-lg">
      <div>
        Developed by: {" "}
        <a href="https://github.com/" className="underline">
        T. Langer
        </a>{" "}
        and{" "}
        <a href="https://github.com/koionaroll" className="underline">
          K. Tran
        </a>
      </div>
    </div>
  );
}

export default Footer;

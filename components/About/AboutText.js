import React from "react";

export default function AboutText({ children }) {
  return (
    <div className="md:w-66vw md:mx-auto xl:w-[50vw] mx-8vw
    mb-8vw">
      <div className="m-bodyText">{children}</div>
    </div>
  );
}

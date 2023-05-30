import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <Typewriter
        options={{
          strings: [
            "WebGIS Expert & Developer",
            "FullStack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default Type;
// AboutOffic.js

import React, { useState } from "react";
import AboutHeader from "./AbouHeader/AboutHeader";
import AboutUs from "./AboutUs";
import ReviewForm from "./AboutReview/ReviewForm";

const AboutOffic = ({ userId }) => {
  const [activeSquare, setActiveSquare] = useState(1);
  const [back, setBack] = useState(1);
  return (
    <div>
      <AboutHeader back={back} activeSquare={activeSquare} />
      <AboutUs
        userId={userId}
        back={back}
        setBack={setBack}
        setActiveSquare={setActiveSquare}
      />
    </div>
  );
};

export default AboutOffic;

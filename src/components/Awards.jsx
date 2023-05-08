import React from "react";
import LineTitle from "./LineTitle";
import Feature from "./Feature";

const Awards = () => {
  return (
    <div className="py-[200px]">
      <div className="container">
        <LineTitle>awards</LineTitle>
        <h2 className="mb-[60px]">Awards & Recognition</h2>
        <div className="columns-3 lg:columns-2">
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
          <Feature
            title="Interior design"
            text="Breakthrough designer of the year 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;

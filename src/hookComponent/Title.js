import React from "react";

const Title = () => {
  console.log("inside title");
  return <div>using useCallback</div>;
};

export default React.memo(Title);

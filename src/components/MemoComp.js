import React from "react";

function MemoComp({ name }) {
  console.log("memeo component");
  return <div>Memo {name}</div>;
}

export default React.memo(MemoComp);

import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //focus input ele
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Input" />
    </div>
  );
};

export default FocusInput;
